const fs = require('fs')
let input = fs.readFileSync(0).toString().trim();
/*
console.log('a'.charCodeAt(0)) 97
console.log('z'.charCodeAt(0)) 122
console.log('A'.charCodeAt(0)) 65
console.log('Z'.charCodeAt(0)) 90
*/


let answer = ''
for(let c of input){
    if(c.charCodeAt(0)>=97 && c.charCodeAt(0)<=122)
       { answer += c.toUpperCase();}
       else if(c.charCodeAt(0)>=65 && c.charCodeAt(0)<=90){
        answer += c
       }
}

console.log(answer)
