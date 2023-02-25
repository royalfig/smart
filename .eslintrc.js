module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  // globals: {
  //   Atomics: 'readonly',
  //   SharedArrayBuffer: 'readonly',
  // },
  // rules: {
  //   'comma-dangle': ['error', 'always-multiline'],
  //   'operator-linebreak': 0,
  //   'implicit-arrow-linebreak': 0,
  //   'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  //   indent: 'off',
  // },
};
