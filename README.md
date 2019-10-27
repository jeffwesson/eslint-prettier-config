# eslint-prettier-config

Shareable eslint configuration

## Installation

Install (or upgrade) with peer-dependencies:

```sh
npx install-peerdeps -d @jeffwesson/eslint-prettier-config
```

Add `.eslintrc` file:

```json
{
	"extends": ["@jeffwesson/eslint-prettier-config"]
}
```

Add `.prettierrc.js` file (or replace existing `.prettierrc`):

```js
module.exports = require('@jeffwesson/eslint-prettier-config/.prettierrc.js');
```

### Aliases

if you use aliases in your project, e.g.
[webpack aliases](https://webpack.js.org/configuration/resolve/#resolvealias) You will need to set
these up in your eslint configuration too so the import-plugin can resolve your imports.

```json
{
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [["Client", "./client"]],
        "extensions": [".js", ".jsx", ".json"]
      }
    }
  }
```

### Precommit Hook

You may also configure `eslint` and `prettier` to run for every commit:

```sh
npm i -D husky lint-staged
```

Add to `package.json`:

```json
{
	"husky": {
		"hooks": {
			"pre-commit": "lint-staged"
		}
	},
	"lint-staged": {
		"*.js": ["eslint --fix", "git add"],
		"*.{json,scss,css,md,prettierrc,eslintrc,babelrc}": ["prettier --write", "git add"]
	}
}
```

Now `eslint` and `prettier` will run on all files when they are committed.

## Notes

As of this moment eslint does not support loading plugins from the location of the shared config
file. This is why we currently specify required plugins as peer-dependencies. See here for proposal
to remedy and status: [eslint/eslint#10643](https://github.com/eslint/eslint/issues/10643)

## Resources

- https://eslint.org/docs/developer-guide/shareable-configs
