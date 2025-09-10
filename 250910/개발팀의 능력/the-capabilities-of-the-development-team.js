const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function solve(arr) {
  const n = arr.length;
  let minDiff = Infinity;

  // 첫 번째 팀 (2명)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let team1 = arr[i] + arr[j];

      // 두 번째 팀 (2명)
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;
        for (let l = k + 1; l < n; l++) {
          if (l === i || l === j) continue;
          let team2 = arr[k] + arr[l];

          // 남은 사람은 세 번째 팀
          let team3 = 0;
          for (let m = 0; m < n; m++) {
            if (m !== i && m !== j && m !== k && m !== l) {
              team3 = arr[m];
            }
          }

          // 팀 능력치 배열
          let teams = [team1, team2, team3];

          // 모두 다를 때만 고려
          let set = new Set(teams);
          if (set.size === 3) {
            let diff = Math.max(...teams) - Math.min(...teams);
            minDiff = Math.min(minDiff, diff);
          }
        }
      }
    }
  }

  return minDiff === Infinity ? -1 : minDiff;
}

console.log(solve(input));
