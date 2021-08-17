const path = require("path");
/**
 * WEBPACK
 * entry
 * output
 * modules
 * plugins
 * mode (envs)
 */
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
};
