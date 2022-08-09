const { readFile, writeFile} = require('fs')

console.log('start')

readFile('./content/first.txt','utf-8', (err, data) =>{
    if(err){ 
        console.log(err)
        return;
    }
    const first = data
    readFile('./content/second.txt', 'utf-8', (err, data) =>{
        if(err){
            console.log(err)
            return
        }
        const second = data
        writeFile(
            './content/result-async.txt',
            `here is the result: ${first}, ${second}`,
            (err, data)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with this task')
            })
    })
})

console.log('starting the next task')