const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

let wifi = 0; 
let i = 0;

while (i < n) {
  if (arr[i] === 1) {
    wifi++; 
    i += m * 2 + 1;
  } else {
    i++;
  }
}

console.log(wifi);
