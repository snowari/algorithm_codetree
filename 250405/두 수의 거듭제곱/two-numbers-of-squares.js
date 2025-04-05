const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input.map(Number);
// Please Write your code here. 

function square(a,b){
    let answer = 1
    for(let i=0 ; i<b; i++){
        answer = a * answer
    }
    return answer
}

console.log(square(a,b))
