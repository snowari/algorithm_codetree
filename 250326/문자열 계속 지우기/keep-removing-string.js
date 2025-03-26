const fs =require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let a = input[0]
let b = input[1]


let i=0
while(i<=a.length - b.length){
    let str = a.slice(i,i+b.length)
    if(str === b){ 
        a = a.slice(0,i) + a.slice(i+b.length)
       i=0
    }else{
        i++
    }
}
 
console.log(a)
