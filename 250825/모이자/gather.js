const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]); 
const num = input[1].split(' ').map(Number); 
let minDis = Infinity; 


for (let i = 0; i < n; i++) {
    let dis = 0;
    for (let j = 0; j < n; j++) {
        dis += Math.abs(j - i) * num[j];
    }
    minDis = Math.min(minDis, dis);
}

// 결과 출력
console.log(minDis);
