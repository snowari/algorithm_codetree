const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (arr[i] <= arr[j]) {
      for (let k = j + 1; k < n; k++) {
        if (arr[j] <= arr[k]) cnt++;
      }
    }
  }
}
console.log(cnt); // 2