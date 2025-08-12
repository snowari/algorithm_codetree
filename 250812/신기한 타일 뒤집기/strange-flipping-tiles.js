const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let line = 0;

const n = parseInt(input[line++]);
const commands = [];
for (let i = 0; i < n; i++) {
  const [xStr, dir] = input[line++].split(' ');
  const x = parseInt(xStr);
  commands.push({ x, dir });
}

let cur = 0;
const tiles = new Map(); 

for (const cmd of commands) {
  const { x, dir } = cmd;
  if (dir === 'L') {
    for (let i = 0; i < x; i++) {
      const pos = cur - i;
      tiles.set(pos, 'W');
    }
    cur -= (x - 1);
  } else { // 'R'
    for (let i = 0; i < x; i++) {
      const pos = cur + i;
      tiles.set(pos, 'B');
    }
    cur += (x - 1);
  }
}

let white = 0;
let black = 0;
for (const color of tiles.values()) {
  if (color === 'W') white++;
  else if (color === 'B') black++;
}

console.log(white, black);