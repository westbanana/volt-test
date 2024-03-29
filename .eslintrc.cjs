module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "@wemake-services/typescript/recommended",
    "@wemake-services/javascript",
  ],
  rules: {
    'max-len': ["error", { "code": 120 }]
  }
};
