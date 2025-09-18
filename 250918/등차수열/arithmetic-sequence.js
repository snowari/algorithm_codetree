const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);


const findMaxArithmeticPairs = (arr) => {
  const n = arr.length;
  // 순서쌍을 만들 수 없으면 0을 반환
  if (n < 2) {
    return 0;
  }

  const kCounts = new Array(101).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sum = arr[i] + arr[j];

      // 두 수의 합이 짝수여야 자연수 K가 존재
      if (sum % 2 === 0) {
        const k = sum / 2;
        // K가 1 이상 100 이하의 자연수인지 확인
        if (k >= 1 && k <= 100) {
          kCounts[k]++;
        }
      }
    }
  }
  return Math.max(...kCounts);
};

console.log(findMaxArithmeticPairs(arr))

