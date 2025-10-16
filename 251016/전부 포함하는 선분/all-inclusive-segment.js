const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const x1 = [];
const x2 = [];
for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    x1.push(a);
    x2.push(b);
}

// Please Write your code here.
const startSorted = [...x1].sort((a, b) => a - b);
const endSorted = [...x2].sort((a, b) => a - b);

let answer = 0;

// i번째 선분 제외 후 남은 교집합 길이 계산
for (let i = 0; i < n; i++) {
    const curStart = (x1[i] === startSorted[n-1]) ? startSorted[n-2] : startSorted[n-1];
    const curEnd = (x2[i] === endSorted[n-1]) ? endSorted[n-2] : endSorted[n-1];
    answer = Math.max(answer, curEnd - curStart);
}

console.log(answer+1);
