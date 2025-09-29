const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1];

// Please Write your code here.
let maxDist = 0;
let lastOne = -1;

for (let i = 0; i < n; i++) {
    if (seat[i] === '1') {
        if (lastOne === -1) {
            maxDist = i;
        } else {
            maxDist = Math.max(maxDist, Math.floor((i - lastOne) / 2));
        }
        lastOne = i;
    }
}

maxDist = Math.max(maxDist, n - 1 - lastOne);

console.log(maxDist);
