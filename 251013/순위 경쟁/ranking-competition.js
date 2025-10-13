const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const changes = input.slice(1).map(e => e.split(" "));

// 점수 초기화
const score = { A: 0, B: 0, C: 0 };

// 현재 명예의 전당 조합 키 생성
function hallKey() {
  const max = Math.max(score.A, score.B, score.C);
  const members = [];
  if (score.A === max) members.push("A");
  if (score.B === max) members.push("B");
  if (score.C === max) members.push("C");
  return members.join(",");
}

let prev = hallKey();
let cnt = 0;

// 변동 처리
for (let i = 0; i < n; i++) {
  const [c, sStr] = changes[i];
  const s = Number(sStr);
  score[c] += s;

  const cur = hallKey();
  if (cur !== prev) {
    cnt++;
    prev = cur;
  }
}

console.log(cnt.toString());
