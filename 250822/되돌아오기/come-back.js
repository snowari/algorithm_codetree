const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);

const dir = {
  'N': [0, 1],
  'S': [0, -1],
  'E': [1, 0],
  'W': [-1, 0],
};

let x = 0, y = 0;
let time = 0;

for (let i = 0; i < n; i++) {
  const [d, distStr] = moves[i].trim().split(/\s+/);
  const dist = Number(distStr);
  const [dx, dy] = dir[d];

  for (let step = 0; step < dist; step++) {
    x += dx;
    y += dy;
    time += 1;
    if (x === 0 && y === 0) {
      console.log(time);
      process.exit(0);
    }
  }
}

console.log(-1);
