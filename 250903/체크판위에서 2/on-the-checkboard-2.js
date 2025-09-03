const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map(line => line.trim().split(""));

// 시작점과 끝점 색이 다르면 경우의 수 0
if (board[0][0] !== board[R - 1][C - 1]) {
    console.log(0);
    process.exit();
}

let count = 0;
const startColor = board[0][0];

// 중간 지점 탐색
for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
        // 시작점, 끝점 제외
        if ((i === 0 && j === 0) || (i === R - 1 && j === C - 1)) continue;

        // 색깔이 같아야 함
        if (board[i][j] !== startColor) continue;

        // 점프 조건: (0,0) → (i,j), (i,j) → (R-1,C-1)
        if (i > 0 && j > 0 && i < R - 1 && j < C - 1) {
            count++;
        }
    }
}

console.log(count);
