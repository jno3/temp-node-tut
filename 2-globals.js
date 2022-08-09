// GLOBALS
// __dirname     - path to current directory
// __filename    - file name
// require       - function to use modules(CommonJS)
// module        - info about current module (file)
// process       - info about env where the program is being executed


console.log(`${__filename}\n`)
console.log(`${module}\n`)
console.log(`${require}\n`)
console.log(`${process}`)

setInterval(() => {
    console.log('hello world')
}, 1000)

