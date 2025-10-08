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
  const visited = Array.from({ length: x + 1 }, () => Array(x + 50).fill(false));
  visited[1][1] = true;

  let head = 0;

  while (head < queue.length) {
    const [dist, speed, time] = queue[head++];

    for (const delta of [1, 0, -1]) {
      const nextSpeed = speed + delta;
      
      if (nextSpeed < 1) continue;

      const nextDist = dist + nextSpeed;

      if (nextDist > x) continue;
      
      if (nextDist === x && nextSpeed === 1) {
        console.log(time + 1);
        return;
      }

      if (!visited[nextDist][nextSpeed]) {
        visited[nextDist][nextSpeed] = true;
        queue.push([nextDist, nextSpeed, time + 1]);
      }
    }
  }
}

solve();
