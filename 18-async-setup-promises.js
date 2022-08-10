const {readFile, writeFile} = require('fs')
const util = require('util')


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch((aerr) => console.log(err))


const start = async() => {
    try{
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
        const first_promise = await readFilePromise('./content/first.txt', 'utf-8')
        const second_promise = await readFilePromise('./content/second.txt', 'utf-8')
        await writeFilePromise('./content/result.txt', `ahaha ${first_promise} + ${second_promise}`)
        console.log(first, second);
    }catch(error){
        console.log(error)
    }
}

start()