const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let windowSum = 0;
for (let i = 0; i < k; i++) {
  windowSum += arr[i];
}

let ans = windowSum;

for (let i = k; i < n; i++) {
  windowSum += arr[i] - arr[i - k]; 
  ans = Math.max(ans, windowSum);
}

console.log(ans);