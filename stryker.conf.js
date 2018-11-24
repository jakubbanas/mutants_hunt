module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "yarn",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off",
    mutate: [
      "src/components/**/*.js",
      "!src/**/*.test.js",
      "!src/**/index.js",
      "!src/**/serviceWorker.js"
    ],
    jest: {
      projectType: "react"
    }
  });
};
