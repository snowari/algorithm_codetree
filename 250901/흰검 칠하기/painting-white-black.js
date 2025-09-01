// Node.js (fs로 표준입력 처리)
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let idx = 0;
const n = parseInt(input[idx++], 10);


const MAXLEN = 200000;
const OFFSET = 100000;

const last = new Uint8Array(MAXLEN + 1);  
const cntW = new Uint32Array(MAXLEN + 1);
const cntB = new Uint32Array(MAXLEN + 1);

let pos = OFFSET;

for (let i = 0; i < n; i++) {
  const x = parseInt(input[idx++], 10);
  const d = input[idx++];

  if (d === 'L') {
    
    for (let step = 0; step < x; step++) {
      last[pos] = 1;
      cntW[pos] += 1;
      pos -= 1;
    }

    pos += 1;
  } else {

    for (let step = 0; step < x; step++) {
      last[pos] = 2;
      cntB[pos] += 1;
      pos += 1;
    }

    pos -= 1;
  }
}

let white = 0, black = 0, gray = 0;
for (let i = 0; i <= MAXLEN; i++) {
  if (cntW[i] >= 2 && cntB[i] >= 2) {
    gray++;
  } else {
    if (last[i] === 1) white++;
    else if (last[i] === 2) black++;
  }
}

console.log(white, black, gray);
