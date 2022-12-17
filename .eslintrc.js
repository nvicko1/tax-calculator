module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  extends: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: [
    'prettier',
    'airbnb-typescript',
    'plugin:cypress/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],

  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['src/*.jsx', 'src/*.js'],
    },
  ],
}
