module.exports = {
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,
  singleQuote: true,
  semi: false,
  bracketSameLine: true,
  jsxBracketSameLine: true, // deprecated in prettier v2.4.0, keeping for backwards compat
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.{css,less}',
      options: {
        printWidth: 200,
      },
    },
  ],
}
