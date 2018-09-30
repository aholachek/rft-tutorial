try {
  const css = require("!raw-loader!./code-examples/styles.css")
  const cssTag = document.createElement("style")
  cssTag.setAttribute("type", "text/css")
  cssTag.appendChild(document.createTextNode(css))
  document.head.appendChild(cssTag)
} catch (e) {}
