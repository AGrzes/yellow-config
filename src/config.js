const findConfig = require('find-config')
const fs = require('fs')
const yaml = require('js-yaml')
function config(baseDirectory,defaults){
  const jsonConfig = findConfig('.yellow.json',{cwd:baseDirectory})
  if (jsonConfig){
    return Object.assign({},defaults,JSON.parse(fs.readFileSync(jsonConfig,'utf-8')))
  }
  const yamlConfig = findConfig('.yellow.yaml',{cwd:baseDirectory})
  if (yamlConfig){
    return Object.assign({},defaults,yaml.safeLoad(fs.readFileSync(yamlConfig,'utf-8')))
  }
  return defaults
}

module.exports = config
