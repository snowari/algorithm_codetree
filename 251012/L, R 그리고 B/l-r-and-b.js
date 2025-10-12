const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const board = input.slice(0, 10);


function solveLRB(lines) {
  const N = 10;
  const grid = Array.from({ length: N }, (_, i) => lines[i].split(""));
  let sx = -1, sy = -1, tx = -1, ty = -1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === "L") { sx = i; sy = j; }
      else if (grid[i][j] === "B") { tx = i; ty = j; }
    }
  }

  const dist = Array.from({ length: N }, () => Array(N).fill(-1));
  const q = [[sx, sy]];
  let qi = 0;
  dist[sx][sy] = 0;

  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

  while (qi < q.length) {
    const [x, y] = q[qi++];
    if (x === tx && y === ty) {
    
      console.log(dist[x][y]-1);
      return;
    }
    for (const [dx, dy] of dirs) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if (dist[nx][ny] !== -1) continue;
      if (grid[nx][ny] === "R") continue; // 장애물
      dist[nx][ny] = dist[x][y] + 1;
      q.push([nx, ny]);
    }
  }

  // 도달 불가
  console.log(-1);
}

solveLRB(board);
