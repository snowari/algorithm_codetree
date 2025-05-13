const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let minX = Infinity, minY = Infinity;
let maxX = -Infinity, maxY = -Infinity;

for (const [x1, y1, x2, y2] of rects) {
    minX = Math.min(minX, x1, x2);
    maxX = Math.max(maxX, x1, x2);
    minY = Math.min(minY, y1, y2);
    maxY = Math.max(maxY, y1, y2);
}


const shiftX = -minX;
const shiftY = -minY;


const board = Array.from(
    { length: maxY + shiftY + 1 },
    () => Array(maxX + shiftX + 1).fill(0)
);


for (const [x1, y1, x2, y2] of rects) {
    const startX = Math.min(x1, x2) + shiftX;
    const endX = Math.max(x1, x2) + shiftX;
    const startY = Math.min(y1, y2) + shiftY;
    const endY = Math.max(y1, y2) + shiftY;

    for (let y = startY; y < endY; y++) {
        for (let x = startX; x < endX; x++) {
            board[y][x] = 1;
        }
    }
}


let area = 0;
for (const row of board) {
    area += row.reduce((a, b) => a + b, 0);
}

console.log(area);