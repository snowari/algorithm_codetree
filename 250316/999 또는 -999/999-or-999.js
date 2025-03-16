const fs = require('fs')
let input= fs.readFileSync(0).toString().trim().split(' ').map(Number)

let arr=[]
let i=0;
while(i<input.length && input[i]!==999 && input[i]!==-999 ){
    arr.push(input[i])
    i++;
}
let min=arr[0]
let max=arr[0]

arr.map(num=>{
    if(min<num){
        min =num
    }
    if(max>num){
        max=num
    }
})

console.log(min, max)