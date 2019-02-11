module.exports = {
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,
  singleQuote: true,
  semi: false,
  jsxBracketSameLine: true,
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
