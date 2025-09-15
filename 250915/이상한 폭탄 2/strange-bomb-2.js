const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const nums = input.slice(1, n + 1).map(Number);

// Please Write your code here.

let maxNum = -1

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if( i=== j){
            continue
        }
        if(nums[i]===nums[j]){
            const distance = Math.abs(i-j)
            if(distance<=k){
                maxNum = Math.max(maxNum,nums[i])
            }
        }

    }
}

console.log(maxNum)