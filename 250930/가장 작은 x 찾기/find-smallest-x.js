const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const conditions = input.slice(1, n + 1).map(line => line.split(' ').map(Number));


let answer = -1;


for (let start = 1; start <= 10000; start++) {
    let value = start;
    let valid = true;

    for (let i = 0; i < n; i++) {
        value *= 2;  // 먼저 두 배
        const [a, b] = conditions[i];
        if (value < a || value > b) {
            valid = false;
            break;
        }
    }

    if (valid) {
        answer = start;
        break;
    }
}

console.log(answer);
