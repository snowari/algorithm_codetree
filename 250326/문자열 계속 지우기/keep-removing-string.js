const fs =require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let a = input[0]
let b = input[1]

for(let i=0; i<a.length ; i++){
    let str = a.slice(i,i+b.length)
  // console.log("str : ",str)
    if(str === b){ //ba랑 비교
        //console.log("str : b : ", str , b)
        a = a.slice(0,i) + a.slice(i+b.length)
        //console.log("a : ", a)
        i=0

    }
}
 
    console.log(a)
