const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

function getCombinations(arr, k) {
  const result = [];
  if (k === 0) return [[]];
  
  function backtrack(start, comb) {
    if (comb.length === k) {
      result.push([...comb]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      comb.push(arr[i]);
      backtrack(i + 1, comb);
      comb.pop();
    }
  }
  backtrack(0, []);
  return result;
}

function solve() {
  const allPossibleCoords = Array.from({ length: 11 }, (_, i) => i);

  for (let numVertical = 0; numVertical <= 3; numVertical++) {
    const numHorizontal = 3 - numVertical;

    const verticalCombos = getCombinations(allPossibleCoords, numVertical);

    for (const vLines of verticalCombos) {
      const horizontalCombos = getCombinations(allPossibleCoords, numHorizontal);

      for (const hLines of horizontalCombos) {
        let allCovered = true;
        for (const point of points) {
          const [px, py] = point;
          const isCovered = vLines.includes(px) || hLines.includes(py);
          
          if (!isCovered) {
            allCovered = false;
            break;
          }
        }

        if (allCovered) {
          return 1;
        }
      }
    }
  }

  return 0;
}

console.log(solve());
