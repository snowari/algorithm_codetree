const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.



let timeA = (a*60)+b

let timeB = (c*60)+d

console.log(timeB-timeA)