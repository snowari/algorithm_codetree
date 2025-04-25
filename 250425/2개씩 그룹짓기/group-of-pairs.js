const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.[    ]
const arr = nums.sort((a, b) => a-b)

const max= []

for(let i=0 ; i<n ; i++){
    max.push(arr[i]+arr[(2*n)-1-i])
}


let answer=0
console.log(Math.max(...max))



