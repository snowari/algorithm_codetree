const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const pairs = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));

// Please Write your code here.

let max=0
const count = {}
for (const [x, y] of pairs) {
    const key = [Math.min(x, y), Math.max(x, y)].join('-'); // (x, y)와 (y, x) 같은 취급
    count[key] = (count[key] || 0) + 1;
    if (count[key] > max) {
        max = count[key];
    }
}
console.log(max)
