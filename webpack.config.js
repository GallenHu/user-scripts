const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const { ConcatSource } = require("webpack-sources");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const commonMeta = require("./src/meta.common.json");

const scriptsFolder = "./src/scripts";

/**
 * 解析meta文件附加到js文件头部
 */
class MetaPlugin {
  constructor(options) {
    this.options = options;
  }
  // https://github.com/webpack/webpack/blob/main/lib/BannerPlugin.js#L73
  apply(compiler) {
    compiler.hooks.compilation.tap("MetaPlugin", compilation => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: "MetaPlugin",
        },
        () => {
          /**
           * Map对象转换为注释字符串
           * @param {*} mapData
           */
          const mapToComment = mapData => {
            const result = [];
            mapData.forEach((value, key) => {
              if (Array.isArray(value)) {
                value.forEach(v => {
                  result.push(`// @${key.padEnd(16, " ")} ${v}`);
                });
              } else {
                result.push(`// @${key.padEnd(16, " ")} ${value}`);
              }
            });
            return result.join("\n");
          };

          // 排序
          const orderKeys = ["name", "name:zh-CN", "description", "version", "match", "grant"];
          const sortKeys = (key1, key2) => {
            const getIndex = k => (orderKeys.indexOf(k) === -1 ? 999 : orderKeys.indexOf(k));
            return getIndex(key1) - getIndex(key2);
          };

          return new Promise((resolve, reject) => {
            for (const chunk of compilation.chunks) {
              // entryOnly
              if (!chunk.canBeInitial()) {
                continue;
              }

              const metaFile = `${scriptsFolder}/${chunk.name}/meta.json`;
              let meta = fs.readFileSync(metaFile, "utf-8");
              try {
                meta = JSON.parse(meta);
              } catch {
                throw new Error(`meta.json parse error: ${metaFile}`);
              }

              let map = new Map(Object.entries(Object.assign({}, commonMeta, meta)));
              if (!meta.name) map.set("name", chunk.name);
              map.set(
                "updateURL",
                `https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/${chunk.name}.user.js`
              );
              map.set(
                "downloadURL",
                `https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/${chunk.name}.user.js`
              );

              map = new Map([...map.entries()].sort((a, b) => sortKeys(a[0], b[0])));

              let commentsStr = "// ==UserScript==\n";
              commentsStr += mapToComment(map);
              commentsStr += "\n// ==/UserScript==\n";
              commentsStr += "/* eslint-disable */ /* spell-checker: disable */\n";

              for (const file of chunk.files) {
                compilation.updateAsset(file, old => {
                  return new ConcatSource(commentsStr, "\n", old);
                });
              }
            }

            resolve();
          });
        }
      );
    });
  }
}

const getEntries = () => {
  const entries = new Map(fs.readdirSync(scriptsFolder).map(dir => [dir, `${scriptsFolder}/${dir}/index.ts`]));
  return Object.fromEntries(entries);
};

module.exports = {
  mode: "production",
  entry() {
    return getEntries();
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].user.js",
    libraryExport: "default",
    library: "[name]",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: [/lanhu-password-fill/],
        terserOptions: {
          format: {
            // 要保留的注释
            comments: /@|==|eslint|checker/,
          },
        },
        extractComments: false, // 不分离出单独的注释文件
      }),
    ],
  },
  plugins: [new CleanWebpackPlugin(), new MetaPlugin()],
};
