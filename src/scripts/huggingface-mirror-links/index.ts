// Function to create and style a button
function createButton(text: string, url: string): HTMLAnchorElement {
  const button = document.createElement("a");
  button.href = url;
  button.textContent = text;
  button.target = "_blank";
  button.style.marginLeft = "10px";
  button.style.padding = "5px 10px";
  button.style.backgroundColor = "#4CAF50";
  button.style.color = "white";
  button.style.textDecoration = "none";
  button.style.borderRadius = "4px";
  button.style.fontSize = "14px";
  return button;
}

// Function to add buttons to the page
function addNavigationButtons(): void {
  // Get the current path from the URL
  const currentPath = window.location.pathname;

  // Create mirror URLs
  const hfMirrorUrl = `https://hf-mirror.com${currentPath}`;
  const modelscopeUrl = `https://www.modelscope.cn${currentPath}`;

  // Find the h1 element
  const h1Element = document.querySelector("h1");
  if (h1Element) {
    // Create buttons
    const hfMirrorButton = createButton("HF Mirror", hfMirrorUrl);
    const modelscopeButton = createButton("ModelScope", modelscopeUrl);

    // Add buttons inside the h1 element
    h1Element.appendChild(hfMirrorButton);
    h1Element.appendChild(modelscopeButton);
  }
}

// Run the function when the DOM is ready
addNavigationButtons();
