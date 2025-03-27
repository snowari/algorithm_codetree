const fs =require('fs')
let input = fs.readFileSync(0).toString().trim()

let answer
if(input<='a'){
    answer = input.charCodeAt(0)+25
    console.log(String.fromCharCode(answer))
}else{
    answer = input.charCodeAt(0)-1
    console.log(String.fromCharCode(answer))
}