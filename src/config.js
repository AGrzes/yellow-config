const findConfig = require('find-config')
const fs = require('fs')
function config(baseDirectory,defaults){
  const jsonConfig = findConfig('.yellow.json',{cwd:baseDirectory})
  if (jsonConfig){
    return Object.assign({},defaults,JSON.parse(fs.readFileSync(jsonConfig,'utf-8')))
  }
  return defaults
}

module.exports = config
