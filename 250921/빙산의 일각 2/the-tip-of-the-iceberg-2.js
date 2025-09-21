const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const h = input.slice(1, 1 + n).map(Number);

if (n === 0) {
  console.log(0);
} else {
  const heights = input.slice(1).map(Number);
  let maxChunks = 0;

  for (let h = 0; h <= 1000; h++) {
    let currentChunks = 0;
    let wasSubmerged = true;

    for (let i = 0; i < n; i++) {
      if (heights[i] > h) {
        if (wasSubmerged) {
          currentChunks++;
        }
        wasSubmerged = false;
      } else {
        wasSubmerged = true;
      }
    }

    if (currentChunks > maxChunks) {
      maxChunks = currentChunks;
    }
  }

  console.log(maxChunks);
}