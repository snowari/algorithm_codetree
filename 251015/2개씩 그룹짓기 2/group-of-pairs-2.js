const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please write your code here.
 
let minDiff = Infinity

arr.sort((a,b) => a-b)
//console.log(arr)

for(let i=0; i<n; i++){
    const diff = arr[n+i] - arr[i]
    minDiff = Math.min(minDiff, diff)
}

console.log(minDiff)

