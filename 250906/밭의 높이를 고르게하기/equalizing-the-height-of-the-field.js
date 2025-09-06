const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, H, T] = input[0].split(' ').map(Number);
const heights = input[1].split(' ').map(Number);

let minCost = Infinity;

for (let i = 0; i <= N - T; i++) {
  let currentWindowCost = 0;

  for (let k = i; k < i + T; k++) {
    currentWindowCost += Math.abs(heights[k] - H);
  }

  minCost = Math.min(minCost, currentWindowCost);

  for (let j = i + T; j < N; j++) {
    currentWindowCost += Math.abs(heights[j] - H);
    minCost = Math.min(minCost, currentWindowCost);
  }
}

console.log(minCost);
