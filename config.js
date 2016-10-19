System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
    "jquery": "npm:jquery@3.1.1",
    "select2": "github:select2/select2@4.0.3",
    "github:select2/select2@4.0.3": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:aurelia-polyfills@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    }
  }
});
