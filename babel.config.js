const envPreset = [
  "@babel/preset-env",
  {
    useBuiltIns: "usage",
    corejs: 3,
    loose: true
  }
];

module.exports = {
  env: {
    production: {
      presets: [envPreset, "@babel/preset-react", "@babel/preset-typescript"],
      plugins: ["@babel/plugin-syntax-dynamic-import"]
    },
    development: {
      presets: [envPreset, "@babel/preset-react", "@babel/preset-typescript"],
      plugins: []
    },
    test: {
      presets: [envPreset, "@babel/preset-react", "@babel/preset-typescript"],
      plugins: [
        "dynamic-import-node",
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-export-default-from"
      ]
    }
  }
};
