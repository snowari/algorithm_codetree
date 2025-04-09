const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
// Please Write your code here.

function solution (a,b) { 
    let small = Math.min(a,b);

    let newA = (a===small ? a+10 : a*2) 
    let newB = (b===small ? b+10 : b*2) 

    return [newA, newB]  
}

[a,b] = solution(a,b)

console.log(a,b)

