const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ");

// Please Write your code here.
const nums = arr.map(ch => ch.charCodeAt(0) - "A".charCodeAt(0));

let count = 0;

// 역순(inversion) 개수 세기
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (nums[i] > nums[j]) count++;
  }
}

console.log(count);
