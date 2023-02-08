const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const { ConcatSource } = require("webpack-sources");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
          return new Promise((resolve, reject) => {
            for (const chunk of compilation.chunks) {
              // entryOnly
              if (!chunk.canBeInitial()) {
                continue;
              }

              const metaFile = `./src/${chunk.name}/meta.json`;
              let meta = fs.readFileSync(metaFile, "utf-8");
              try {
                meta = JSON.parse(meta);
              } catch {
                throw new Error(`meta.json parse error: ${metaFile}`);
              }

              let metaStr = "// ==UserScript==\n";
              metaStr +=
                Object.keys(meta)
                  .map(key => `// @${key.padEnd(16, " ")} ${meta[key]}`)
                  .join("\n") + "\n// ==/UserScript==\n";
              metaStr += "/* eslint-disable */ /* spell-checker: disable */\n";

              for (const file of chunk.files) {
                compilation.updateAsset(file, old => {
                  return new ConcatSource(metaStr, "\n", old);
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
  const entries = {};
  fs.readdirSync("./src").forEach(dir => {
    if (dir !== "utils") {
      entries[dir] = `./src/${dir}/index.ts`;
    }
  });
  return entries;
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
    library: "User",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
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
