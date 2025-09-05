const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let answer = 0;

for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) { 
        
        const subArray = arr.slice(i, j + 1); 
        let sum = 0;
        for (const num of subArray) {
            sum += num;
        }

        const itemCnt = subArray.length;
        
        if (sum % itemCnt === 0) {
            const avg = sum / itemCnt;

            if (subArray.includes(avg)) {
                answer++;
            }
        }
    }
}

console.log(answer);


