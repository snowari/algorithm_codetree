const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

const days = [31,28,31,30,31,30,31,31,30,31,30,31]

let caclMonth = 0

for(let i=m1 ; i<m2; i++){
  caclMonth += days[i-1]
}

console.log(caclMonth-d1+d2+1)