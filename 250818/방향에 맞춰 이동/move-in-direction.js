const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1).map(line => {
  const [dir, dist] = line.split(" ");
  return [dir, Number(dist)];
});

// 방향 매핑
const dirMap = { "W": 0, "S": 1, "N": 2, "E": 3 };
const dx = [-1, 0, 0, 1]; // W, S, N, E
const dy = [0, -1, 1, 0];

let x = 0, y = 0;

for (let [dir, dist] of moves) {
  const d = dirMap[dir];
  x += dx[d] * dist;
  y += dy[d] * dist;
}

console.log(x, y);