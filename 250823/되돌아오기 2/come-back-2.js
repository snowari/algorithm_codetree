const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

let dir = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let x = 0, y = 0;
let time = 0;

for (const c of commands) {
  if (c === 'L') {
    dir = (dir + 3) % 4;
    time += 1;
  } else if (c === 'R') {
    dir = (dir + 1) % 4;
    time += 1;
  } else if (c === 'F') {
    x += dx[dir];
    y += dy[dir];
    time += 1;
    if (x === 0 && y === 0) {
      console.log(time);
      process.exit(0);
    }
  }
}

console.log(-1)