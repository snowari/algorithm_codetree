const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let x = Number(input[0]);

const queue = [[0, 1, 0]];
const visited = Array.from({ length: x + 1 }, () => Array(x + 2).fill(false));
visited[0][1] = true;

while (queue.length > 0) {
  const [dist, speed, time] = queue.shift();

  if (dist === x && speed === 1) {
    console.log(time);
    break;
  }

  for (let delta of [-1, 0, 1]) {
    const nextSpeed = speed + delta;
    if (nextSpeed < 1) continue;
    const nextDist = dist + nextSpeed;
    if (nextDist > x) continue;

    if (!visited[nextDist][nextSpeed]) {
      visited[nextDist][nextSpeed] = true;
      queue.push([nextDist, nextSpeed, time + 1]);
    }
  }
}
