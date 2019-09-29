'use strict'

const yaml = require('js-yaml');
const fs = require('fs');

function parse(path, encoding) {
  const result = yaml.load(fs.readFileSync(path, { encoding: encoding }));
  return result ? result : { };
}

function config(options) {
  let path = '.env.yml';
  let encoding = 'utf8';

  if (options) {
    if (options.path) {
      path = options.path;
    }
    if (options.encoding) {
      encoding = options.encoding;
    }
  }

  try {
    let parsedDoc = parse(path, encoding);
    
    Object.keys(parsedDoc).forEach(function(key) {
      process.env[key] = process.env[key] || parsedDoc[key];
    });

    return { parsed: parsedDoc };
  } catch (e) {
    return { error: e };
  }
}

module.exports.config = config;
module.exports.load = config;
module.exports.parse = parse;
