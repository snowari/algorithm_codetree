const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const x = Number(input);

function solve() {
  if (x === 0) {
    console.log(0);
    return;
  }
  if (x === 1) {
    console.log(1);
    return;
  }

  const queue = [[1, 1, 1]];
  const visited = new Set();
  visited.add("1,1");

  const maxSpeed = Math.ceil(Math.sqrt(2 * x)) + 2;

  let head = 0;

  while (head < queue.length) {
    const [dist, speed, time] = queue[head++];

    for (const delta of [1, 0, -1]) {
      const nextSpeed = speed + delta;
      
      if (nextSpeed < 1 || nextSpeed > maxSpeed) continue;

      const nextDist = dist + nextSpeed;

      if (nextDist > x) continue;
      
      if (nextDist === x && nextSpeed === 1) {
        console.log(time + 1);
        return;
      }

      const key = `${nextDist},${nextSpeed}`;
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([nextDist, nextSpeed, time + 1]);
      }
    }
  }
}

solve();
