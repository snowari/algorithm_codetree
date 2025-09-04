const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map(line => line.trim().split(""));

function solve(grid) {
  const R = grid.length;
  const C = grid.length;                 
  const start = grid;            
  const end = grid[R - 1][C - 1];

  let cnt = 0;
  for (let r1 = 1; r1 <= R - 2; r1++) {
    for (let c1 = 1; c1 <= C - 2; c1++) {
      if (start === grid[r1][c1]) continue;  // start와 같으면 불가
      for (let r2 = r1 + 1; r2 <= R - 2; r2++) {
        for (let c2 = c1 + 1; c2 <= C - 2; c2++) {
          const mid1 = grid[r1][c1];
          const mid2 = grid[r2][c2];
          if (mid1 !== mid2 && mid2 !== end) cnt++;
        }
      }
    }
  }
  return cnt;
}

console.log(solve(board));