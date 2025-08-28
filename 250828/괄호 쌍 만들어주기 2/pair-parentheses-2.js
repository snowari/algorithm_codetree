const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

let openPairs = 0; 
let ans = 0;

for (let i = 0; i < A.length - 1; i++) {
  if (A[i] === '(' && A[i + 1] === '(') openPairs++;
  if (A[i] === ')' && A[i + 1] === ')') ans += openPairs;
}

console.log(ans);
