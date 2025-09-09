const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0].trim());
const [a1, b1, c1] = input[1].split(" ").map(Number);
const [a2, b2, c2] = input[2].split(" ").map(Number);

function dist(x, y, N) {
  let d = Math.abs(x - y);
  return Math.min(d, N - d);
}

let count = 0;

for (let x = 1; x <= N; x++) {
  for (let y = 1; y <= N; y++) {
    for (let z = 1; z <= N; z++) {
      const ok1 = dist(x, a1, N) <= 2 && dist(y, b1, N) <= 2 && dist(z, c1, N) <= 2;
      const ok2 = dist(x, a2, N) <= 2 && dist(y, b2, N) <= 2 && dist(z, c2, N) <= 2;
      if (ok1 || ok2) {
        count++;
      }
    }
  }
}

console.log(count);
