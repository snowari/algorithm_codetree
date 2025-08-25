const fs = require("fs");
const s = fs.readFileSync(0, "utf8").trim();
const n = s.length;

const R = new Array(n + 1).fill(0);
for (let i = n - 1; i >= 0; i--) {
  R[i] = R[i + 1] + (s[i] === ')' ? 1 : 0);
}

let ans = 0n;
for (let i = 0; i < n; i++) {
  if (s[i] === '(') ans += BigInt(R[i + 1]);
}

console.log(String(ans));
