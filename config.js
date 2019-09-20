(function () {
  const _args_map = {
    dotenv_yaml_config_path: 'path',
    dotenv_yaml_config_encoding: 'encoding'
  };
  let options = {};
  process.argv.map( arg => {
    Object.keys(_args_map).map( (key, index) => {
      if (arg.startsWith(key)) {
        options[_args_map[key]] = arg.replace(key + '=', '');
      }
    });
  })
  console.log('[dotenv-yaml] Options:', options);
  require('./lib/index').config(options);
})()
