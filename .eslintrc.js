const path = require('path');

module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['react', 'react-hooks', 'prettier', 'import', 'jsx'],
  parser: '@babel/eslint-parser',
  settings: {
    'import/resolver': {
      node: {
        paths: path.resolve(__dirname, './src'),
      },
    },
    react: {
      version: require('react/package.json').version,
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  env: {
    es2021: true,
    browser: true,
  },
  rules: {
    quotes: 0,
    'no-console': 1,
    'no-debugger': 1,
    'no-var': 1,
    semi: [1, 'always'],
    'no-trailing-spaces': 1,
    'no-tabs': 1,
    'eol-last': 0,
    'no-underscore-dangle': 0,
    'no-alert': 0,
    'no-lone-blocks': 0,
    'jsx-quotes': 1,
    'import/extensions': 1,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'react/display-name': [
      1,
      {
        ignoreTranspilerName: false,
      },
    ],
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any'],
      },
    ],
    'react/no-unused-vars': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-spacing': 1,
    'react/jsx-indent-props': 0,
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-wrap-multilines': 1,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': 1,
    'react/no-set-state': 0,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  globals: {},
};
