const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' ').map(Number));

let maxScore = 0;

for (let startPos = 1; startPos <= 3; startPos++) {
  let cups = [0, 0, 0, 0];
  cups[startPos] = 1;
  let currentScore = 0;

  for (let i = 0; i < n; i++) {
    const [a, b, c] = commands[i];
    [cups[a], cups[b]] = [cups[b], cups[a]];
    if (cups[c] === 1) {
      currentScore++;
    }
  }
  
  maxScore = Math.max(maxScore, currentScore);
}

console.log(maxScore);
