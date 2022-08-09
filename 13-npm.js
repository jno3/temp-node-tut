//npm --version
//npm i <package_name> instala pacote no projeto

//npm install -g <package_name> instala pacote global

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root manually)
//npm init (step by step, press enter to skip)
//npm init -y

const _ = require('lodash')

const items = [1,[2,[3,[2,3, [66,1],4,10,39]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)