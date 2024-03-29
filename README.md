# @bigfishtv/prettier-config

## Installation

```sh
yarn add -D @bigfishtv/prettier-config
echo "module.exports = require('@bigfishtv/prettier-config')" > prettier.config.js
echo "package.json" >> .prettierignore
echo "composer.json" >> .prettierignore
```

## Prettier Config

|                      | Default (JS) |    CSS    | PHP<sup>1</sup> |
| -------------------- | :----------: | :-------: | :-------------: |
| Print Width          |     120      |    200    |       120       |
| Semi-colons          |      N       |     Y     |        Y        |
| Tabs vs Spaces       |    Spaces    |  Spaces   |     Spaces      |
| Tab Width            |      2       |     2     |        4        |
| Bracket Same Line    |      Y       |     -     |        -        |
| Quotes               |    Single    |  Single   |     Single      |
| Trailing Commas      |     es5      |     -     | all<sup>2</sup> |
| Supported Extensions |      \*      | css, less |       php       |

1.  PHP is not yet part of this config, but this is what it will be when it is.
2.  This might change in future to be "php5.0" - dependent on prettier plugin implementation
