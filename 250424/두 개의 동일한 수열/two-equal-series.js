const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number);
const b = input[2].trim().split(' ').map(Number);

// Please Write your code here.

let str1 = a.sort().join('')
let str2 = b.sort().join('')


str1 === str2 ? console.log("Yes") : console.log('No')

//console.log(a.sort(),b.sort())