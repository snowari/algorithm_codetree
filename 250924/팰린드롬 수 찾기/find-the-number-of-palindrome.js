const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

function isPalindrome(num) {
  const originalStr = String(num);
  const reversedStr = originalStr.split('').reverse().join('');
  return originalStr === reversedStr;
}

let count = 0;
for (let i = x; i <= y; i++) {
  if (isPalindrome(i)) {
    count++;
  }
}

console.log(count);
