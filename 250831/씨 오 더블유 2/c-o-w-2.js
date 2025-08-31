const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

let cntC = 0;
let cntCO = 0;
let ans = 0;

for (let i = 0; i < n; i++) {
    if (string[i] === 'C') {
        cntC++;
    } else if (string[i] === 'O') {
        cntCO += cntC;
    } else if (string[i] === 'W') {
        ans += cntCO;
    }
}

console.log(ans);
