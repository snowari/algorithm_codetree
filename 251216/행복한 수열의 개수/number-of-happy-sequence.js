const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

function isHappySequence(arr, m) {
    if (m === 1) {
        return true;
    }

    let maxCount = 0;
    let currentCount = 1;

    for (let i = 1; i < n; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++;
        } else {
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
        }
    }

    return maxCount >= m;
}

let happySequenceCount = 0;

// 가로 수열 확인
for (let i = 0; i < n; i++) {
    const row = grid[i];
    if (isHappySequence(row, m)) {
        happySequenceCount++;
    }
}

// 세로 수열 확인
for (let j = 0; j < n; j++) {
    const col = [];
    for (let i = 0; i < n; i++) {
        col.push(grid[i][j]);
    }

    if (isHappySequence(col, m)) {
        happySequenceCount++;
    }
}

console.log(happySequenceCount);