const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let len = Number(input[0])
let arr= input[1].split(' ').map(Number)
let min = arr[0]
let cnt =0

for(let i=0 ; i<len; i++){
    if(arr[i]< min){
        min = arr[i]
    }
}

arr.map(num=> {
    num===min ? cnt ++ : null
})

console.log(min, cnt)

