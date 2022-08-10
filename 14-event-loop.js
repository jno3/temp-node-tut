console.log('first')
setTimeout(() => {
    console.log('second')
}, 3000)

console.log('final')



let k = () =>{
    console.log('deeeeeeee')
}

setTimeout(k, 400);
k()

console.log('beeeee')


const { readFile } = require('fs')

console.log('first - pt2')
var values
readFile('./content/first.txt', 'utf-8', (err, result) =>{
    if(err){
        console.log(err.code)
        return
    }
    values = result
    console.log(result)
    console.log(values)
    console.log('second - pt2');
})

console.log(values)
console.log('final - pt2')

//nextone

console.log('first - pt3')
setTimeout(() => {
    console.log('second - pt3');
}, 0);
console.log('final - pt3');

