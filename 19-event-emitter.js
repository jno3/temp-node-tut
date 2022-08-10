const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received ${name}, ${id}`)
})

customEmitter.on('response', (name) => {
    console.log(`some other logic here ${name}`)
})

customEmitter.on('response', () => {
    console.log(`YET AGAIN`)
})

customEmitter.emit('response', 'joao', 12)

