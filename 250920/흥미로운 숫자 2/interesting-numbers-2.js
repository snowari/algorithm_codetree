const isInteresting = (n) => {
  const s = String(n);
  const digitCounts = new Map();

  for (const digit of s) {
    digitCounts.set(digit, (digitCounts.get(digit) || 0) + 1);
  }

  if (digitCounts.size !== 2) {
    return false;
  }

  const counts = Array.from(digitCounts.values());
  return counts.includes(1);
};

const solve = (x, y) => {
  let count = 0;
  for (let i = x; i <= y; i++) {
    if (isInteresting(i)) {
      count++;
    }
  }
  return count;
};

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);

const result = solve(x, y);
console.log(result);
