const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);
// Please Write your code here.


arr.sort((a, b) => a - b);

const A = arr[0];
const total = arr[6];

for (let i = 1; i < 6; i++) {
  for (let j = i + 1; j < 6; j++) {
    const AB = arr[i];
    const AC = arr[j];

    const B = AB - A;
    const C = AC - A;

    // 검증: A + B + C가 실제 최대값과 같아야 함
    if (A + B + C === total) {
      console.log(A, B, C);
      process.exit(0);
    }
  }
}