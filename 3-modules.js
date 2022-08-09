// CommonJS, every file is module (by default)
// Modules

const names = require('./4-firstmodule');
const sayHi = require('./5-secondmodule');
const { default: kino } = require('./6-alternative-flavor');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')


sayHi('fuck')
sayHi(names.john)
sayHi(names.peter)

console.log(data.items[0])

