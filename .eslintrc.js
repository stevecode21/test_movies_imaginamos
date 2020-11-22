// # "off" or 0 - turn the rule off
// # "warn" or 1 - turn the rule on as a warning(doesn’t affect exit code)
// # "error" or 2 - turn the rule on as an error(exit code is 1 when triggered)
module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  // root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
  ],
  rules: {
    'react/no-did-mount-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/jsx-uses-vars': 2,
    'no-undef': 2,
    semi: 2,
    'react/prop-types': 2,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 2,
  },
  globals: {
    GLOBAL: false,
    it: false,
    expect: false,
    describe: false,
  },
};
