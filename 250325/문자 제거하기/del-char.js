const fs =require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')
 
let str = input[0]
input = input.slice(1).map(Number)


for(let i=0; i<input.length; i++){
    if(input[i]>=str.length){
        str= str.slice(0,-1)
        console.log(str)
    }else{
        str = str.slice(0,input[i]) + str.slice(input[i]+1)
        console.log(str)
    }
}
