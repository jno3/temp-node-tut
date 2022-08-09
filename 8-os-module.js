const os = require('os')

//info on type of system
console.log(os.arch())

//info on the user
console.log(os.userInfo())

//methot returns system uptime in seconds
console.log(`the system uptime is of ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOS)