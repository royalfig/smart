module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    indent: 'off',
  },
};
