const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]); 
const grid = input.slice(1).map(line => line.split(" ").map(Number));

let maxCoins = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= N - 3; j++) {
    let sum = grid[i][j] + grid[i][j+1] + grid[i][j+2];
    maxCoins = Math.max(maxCoins, sum);
  }
}

console.log(maxCoins);
