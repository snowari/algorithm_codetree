const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const board = Array.from({ length: 202 }, () => Array(202).fill(0));

for (const [x1, y1, x2, y2] of rects) {
    for (let y = y1; y < y2; y++) {
        for (let x = x1; x < x2; x++) {
            board[y][x] = 1; 
        }
    }
}


let area = 0;
for (let row of board) {
    area += row.reduce((acc, val) => acc + val, 0);
}

console.log(area);

// Please Write your code here.