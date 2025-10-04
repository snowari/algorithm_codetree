const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = [];
for (let i = 1; i <= n; i++) {
    nums.push(Number(input[i]));
}

const explodedIndices = new Set();
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (j - i > k) {
            break;
        }
        if (nums[i] === nums[j]) {
            explodedIndices.add(i);
            explodedIndices.add(j);
        }
    }
}

if (explodedIndices.size === 0) {
    console.log(0);
} else {
    const explosionCounts = {};
    for (const index of explodedIndices) {
        const bombNum = nums[index];
        explosionCounts[bombNum] = (explosionCounts[bombNum] || 0) + 1;
    }

    let maxCount = 0;
    let resultBombNum = -1;
    for (const [bombNumStr, count] of Object.entries(explosionCounts)) {
        const bombNum = Number(bombNumStr);
        if (count > maxCount) {
            maxCount = count;
            resultBombNum = bombNum;
        } else if (count === maxCount) {
            resultBombNum = Math.max(resultBombNum, bombNum);
        }
    }
    console.log(resultBombNum);
}
