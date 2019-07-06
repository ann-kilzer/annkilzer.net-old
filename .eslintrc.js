module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  globals: {
    bus: false,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'linebreak-style': [
      'error',
      'unix',
    ],
    'no-param-reassign': 'off',
  },
};
