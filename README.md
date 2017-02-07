ESLint-Plugin-Destructuring
===========================

[![Maintenance Status][status-image]][status-url] [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Destructuring-specific linting rules for ESLint.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

    $ npm install eslint

If you installed `ESLint` globally, you have to install the plugin globally too. Otherwise, install it locally.

    $ npm install eslint-plugin-destructuring

# Configuration

Add a `plugins` section and specify eslint-plugin-destructuring as a plugin.

Then, enable all of the rules that you would like to use.

## Recommended configuration
This plugin exports a `recommended` configuration that enforces all the rules. You can configure the plugin as follows:

```json
{
  "plugins": ["destructuring"],
  "extends": ["plugin:destructuring/recommended"]
}
```
# List of provided rules
Rules are divided into categories for your convenience. All rules are off by default, unless you use one of the plugin's configurations which turn all relevant rules on.

### Stylistic Issues
These rules are purely matters of style and are quite subjective.
* [no-rename](docs/rules/no-rename.md): Forbid rename syntax when object destructuring.
* [in-params](docs/rules/in-params.md): Configure destructuring within parameters.
* [in-methods-params](docs/rules/in-methods-params.md): Forbid destructuring within method parameters.

# Contributing
Contributions are always welcome!.

# License

eslint-plugin-destructuring is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

[npm-url]: https://npmjs.org/package/eslint-plugin-destructuring
[npm-image]: http://img.shields.io/npm/v/eslint-plugin-destructuring.svg?style=flat-square

[travis-url]: https://travis-ci.org/lukeapage/eslint-plugin-destructuring
[travis-image]: http://img.shields.io/travis/lukeapage/eslint-plugin-destructuring/master.svg?style=flat-square

[deps-url]: https://david-dm.org/lukeapage/eslint-plugin-destructuring
[deps-image]: https://img.shields.io/david/dev/lukeapage/eslint-plugin-destructuring.svg?style=flat-square

[status-url]: https://github.com/lukeapage/eslint-plugin-destructuring/pulse
[status-image]: http://img.shields.io/badge/status-maintained-brightgreen.svg?style=flat-square
