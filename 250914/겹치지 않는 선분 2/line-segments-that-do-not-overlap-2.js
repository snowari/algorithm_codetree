const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1).map(line => line.split(" ").map(Number));

// 선분이 교차하는지 확인하는 함수
function isCross(a, b) {
    const [x1, x2] = a;
    const [y1, y2] = b;
    return (x1 < y1 && x2 > y2) || (x1 > y1 && x2 < y2);
}

let count = 0;

// 각 선분이 다른 어떤 선분과도 교차하지 않는지 확인
for (let i = 0; i < n; i++) {
    let cross = false;
    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        if (isCross(segments[i], segments[j])) {
            cross = true;
            break;
        }
    }
    if (!cross) count++;
}

console.log(count);
