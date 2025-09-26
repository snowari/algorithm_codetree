const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [0].concat(input[1].trim().split(' ').map(Number));

// Please Write your code here.


let max = 0;
for (let i = 1; i <= n; i++) {
    let currentSum = 0;
    let currentPos = i;//첫 시작

    for (let j = 0; j < m; j++) {
        const nextPos = arr[currentPos];
        currentSum += arr[nextPos];
        currentPos = nextPos;
    }
    max = Math.max(max, currentSum);
}

console.log(max);