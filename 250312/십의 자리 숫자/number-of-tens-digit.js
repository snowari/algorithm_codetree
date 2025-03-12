const fs = require('fs')
let input =  fs.readFileSync(0).toString().trim().split(' ').map(Number)

let arr=[]

for (elem of input){
    if(elem===0){
        break
    }else
        arr.push(elem)
}

let count=Array(10).fill(0)

arr.forEach( num => (num>=10) ? count[(Math.floor(num/10))]++ : null)

//count.slice(1).forEach(num=> console.log(num))

for(let i =1; i<10; i++){
    console.log(i+" - "+count[i])
}

