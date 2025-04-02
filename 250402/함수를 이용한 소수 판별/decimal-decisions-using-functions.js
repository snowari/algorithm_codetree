const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const [A, B] = input.map(Number);

// Please Write your code here.

function isPrime(a){
    for(let i =2; i<a; i++){
        if(a%i===0){
            return false
        }
    }
    return true
}

let answer = 0;
for(let i=A ; i<=B ; i++){
    if(isPrime(i)===true){
        answer+= i
    }
}

console.log(answer)