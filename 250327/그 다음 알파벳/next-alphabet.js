const fs =require('fs')
let input = fs.readFileSync(0).toString().trim()





let answer;
if(input.charCodeAt(0)>=122){
    answer=input.charCodeAt(0)-26
 
    console.log(String.fromCharCode(answer+1))
}else{
    let tmp = input.charCodeAt(0)
    console.log(String.fromCharCode(tmp+1))
}