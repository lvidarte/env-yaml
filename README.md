# env-yaml

## Usage

As early as possible in your application, require and configure env-yaml.

```javascript
require('env-yaml').config();
```

### Preload

You can use the `--require` (`-r`) [command line option](https://nodejs.org/api/cli.html#cli_r_require_module) to preload env-yaml. By doing this, you do not need to require and load env-yaml in your application code.

```bash
$ node -r env-yaml/config your_script.js
```

Create a `.env.yml` file in the root dirctory of your project, 
and add environment-specific variables as valid YAML.

That's it.

`process.env` now has the keys and values you defined in your `.env.yml` file.

## Options

### Path

Default: `.env.yml`

You can specify a custom path if your file containing environmnet variables is
named or located differently.

```javascript
require('env-yaml').config({ path: '/custom/path/to/your/yaml/env/vars' });
```

### Encoding

Default: `utf8`

You may specify the encoding of your file containing environment variables
using this option.

```javascript
require('env-yaml').config({ encoding: 'base64' });
```
