const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);

// Please Write your code here. 

const sortedArr = arr.sort((a,b)=> a-b)
const [a,b,c] = [...sortedArr]
const leftGap = b-a
const rightGap = c-b

const ans = (leftGap && rightGap === 1) ? 0 : ((leftGap ===2 || rightGap === 2)? 1: 2)
console.log(ans)


