const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let maxSum = 0;


for (let i = 0; i < N; i++) {
  for (let j = i + 2; j < N; j++) { 
    maxSum = Math.max(maxSum, arr[i] + arr[j]);
  }
}

console.log(maxSum);
