const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function getCombinations(arr, k) {
  const results = [];
  function backtrack(start, comb) {
    if (comb.length === k) {
      results.push([...comb]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      comb.push(arr[i]);
      backtrack(i + 1, comb);
      comb.pop();
    }
  }
  backtrack(0, []);
  return results;
}

function solve(arr) {
  const total = arr.reduce((a, b) => a + b, 0);
  const combs = getCombinations(arr, 3);
  let minDiff = Infinity;

  for (const team of combs) {
    const teamSum = team.reduce((a, b) => a + b, 0);
    const otherSum = total - teamSum;
    const diff = Math.abs(teamSum - otherSum);
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}

console.log(solve(input));
