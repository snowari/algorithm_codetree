const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.


const sub = a*b*c
const solution =(n)=>{
    if(n<10){
        return n
    }
    return (n%10) + Math.floor(solution(n/10))

}

console.log(solution(sub))
//44253432