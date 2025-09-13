const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
// Please Write your code here.

 const n = 5;
const segments = [[1, 3], [2, 4], [5, 8], [6, 9], [7, 10]];

function getMaxOverlappedCnt(i1, i2, i3) {
    let count = Array(11).fill(0);
    for (let i = 0; i < n; i++) {
        if (i === i1 || i === i2 || i === i3) {
            continue;
        }
        
        const [x1, x2] = segments[i];
        for (let j = x1; j <= x2; j++) {
            count[j]++;
        }
    }
    
    return Math.max(...count);
}

let ans = 100;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            const maxCnt = getMaxOverlappedCnt(i, j, k);
            ans = Math.min(ans, maxCnt);
        }
    }
}

console.log(ans);

>> 1
