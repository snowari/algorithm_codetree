const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

// Please Write your code here.

[...str1].sort().join('') === [...str2].sort().join('') ? console.log("Yes") : console.log("No")



