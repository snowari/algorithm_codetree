const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);

// Please Write your code here. 

const sortedArr = arr.sort((a,b)=> a-b)
const [a,b,c] = [...sortedArr]
const leftGap = b-a
const rightGap = c-b

let ans = 0
if(leftGap ===1 && rightGap===1) ans =0;
else if(leftGap===2 || rightGap===2) ans = 1;
else ans = 2

console.log(ans)


