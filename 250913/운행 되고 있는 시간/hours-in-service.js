const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let removedIndex = -1
let minLength = Infinity

for(let i=0; i<n; i++){
    const [start, end] = segments[i]
    const length = end-start

    if(length < minLength){
        minLength = length
        removedIndex = i
    }
}

let totalTime = 0
for (let i=0; i<n; i++){
    if( i===removedIndex){
        continue;
    }
    const [start, end] = segments[i]
    totalTime += end-start
}

console.log(totalTime-1)