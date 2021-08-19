module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['frontend/tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-undef': ['error'],
    'no-console': ['off'],
    'react-native/no-color-literals': ['off'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};