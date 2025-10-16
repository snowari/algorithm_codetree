const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

// Please Write your code here.a

arr.sort((a,b) => a-b)

const A = arr[0]
const B = arr[1]
const C = arr[2]
const D = arr[14] - (A+B+C)





console.log(A, B, C, D)