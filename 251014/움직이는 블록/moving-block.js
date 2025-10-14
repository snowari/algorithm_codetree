const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let blocks = input.slice(1, n + 1).map(Number);

const avg = blocks.reduce((a,b) => a+b, 0) /n 
let answer = 0

for (const n of blocks){
    if (n>avg) answer += n-avg
}

console.log(answer)