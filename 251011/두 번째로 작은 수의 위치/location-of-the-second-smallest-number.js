const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const a = input[1].split(" ").map(Number);

// Please Write your code here.

let answer = -1

sortedArr = [...a].sort((a,b) => (a-b))

const min = sortedArr[0]
let second = 0
for(let n of sortedArr){
    if(n!==min){
        second = n 
        break;
    }
}

const count  = a.filter(n => n === second).length

if(count > 1){
    console.log(-1)
    return;
}

a.map((n, index)=>{
    if(n===second && answer === -1){
        answer = index+1
    }
}) 

console.log(answer)