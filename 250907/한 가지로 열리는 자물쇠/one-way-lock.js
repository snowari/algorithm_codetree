const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const [a, b, c] = input[1].split(" ").map(Number);

function isValid(x, y) {
  // 원형 자물쇠처럼 1과 N이 이어져 있는 상황은 없음
  // 단순히 차이가 2 이하인지 확인
  return Math.abs(x - y) <= 2;
}

let count = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    for (let k = 1; k <= N; k++) {
      if (isValid(i, a) || isValid(j, b) || isValid(k, c)) {
        count++;
      }
    }
  }
}

console.log(count);
