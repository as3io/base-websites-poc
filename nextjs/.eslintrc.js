module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
