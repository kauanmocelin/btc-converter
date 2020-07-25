module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    mocha: true,
  },
  extends: ["standard", "prettier"],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {},
  overrides: [
    {
      files: "*.spec.js",
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
};
