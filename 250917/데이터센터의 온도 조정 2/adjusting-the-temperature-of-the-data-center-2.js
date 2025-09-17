// Node.js 입력/출력용 코드
const fs = require('fs');

const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
if (data.length === 0) {
  console.log(0);
  process.exit(0);
}

let idx = 0;
const N = data[idx++]; 
const C = data[idx++]; 
const G = data[idx++]; 
const H = data[idx++];

const Ta = new Array(N);
const Tb = new Array(N);
for (let i = 0; i < N; i++) {
  Ta[i] = data[idx++];
  Tb[i] = data[idx++];
}

let maxWork = 0;

// 가능한 온도 범위는 문제의 제약에 따라 0 ~ 1000
for (let t = 0; t <= 1000; t++) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (t < Ta[i]) sum += C;
    else if (t <= Tb[i]) sum += G;
    else sum += H;
  }
  if (sum > maxWork) maxWork = sum;
}

console.log(maxWork);
