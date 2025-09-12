const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let maxTime = 0
let removedIdx = -1
for(let i=0; i<n ; i++){
let timeTable = Array(1001).fill(0)
    for(let j=0; j<n; j++){
        if(i===j){
            continue;
        }
        let [start, end] = segments[j]
        for(let k=start ; k<=end; k++){
            timeTable[k] ++;
        }
    }
    let time = 0    
    for(let k=0; k<timeTable.length; k++){
        if(timeTable[k] === n-1){
            time++;
        }
    }
    if(time>= maxTime){
        maxTime = time
        removedIdx = i
    }
}

let answer = 0

for(let i=0; i<n; i++){
    if(i===removedIdx){
        continue;
    }
    answer += segments[i][1]- segments[i][0]
    //console.log(answer)
}
//
console.log(answer-1)
