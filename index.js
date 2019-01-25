module.exports = {
  printWidth: 120,
  singleQuote: true,
  semi: false,
  jsxBracketSameLine: true,
  trailingComma: "es5",
  overrides: [
    {
      files: "*.[less|css]",
      options: {
        printWidth: 160
      }
    }
  ]
};
