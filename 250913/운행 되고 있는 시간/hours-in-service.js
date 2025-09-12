const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.



let maxTime =0
for (let i=0; i<n; i++){
    let timeTable = Array(1001).fill(0)
    let totalTime = 0
    for(let j=0; j<n; j++){
        if(i===j){
            continue
        }

        const [start, end]= segments[j]
        for(let j= start; j<end; j++){
            timeTable[j] =1
        }
    }

    totalTime = timeTable.reduce((acc,cur) => acc+cur, 0)
    maxTime = Math.max(totalTime, maxTime)
}

console.log(maxTime)