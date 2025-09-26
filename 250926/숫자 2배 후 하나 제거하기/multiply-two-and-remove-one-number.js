const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
// Please Write your code here.

let minDiff=1000
for(let i=0; i<n; i++){
    let tempArr = [...arr]
    tempArr[i] *=2
    for(let j=0; j<n; j++){
        let remainArr = []
        for(let k=0; k<n; k++){
            if(k!==j){
                remainArr.push(tempArr[k])
            }
        }
        let sumDiff =0;
        for(let k=0; k<remainArr.length -1; k++){
            sumDiff += Math.abs(remainArr[k]- remainArr[k+1])
        }
        minDiff = Math.min(minDiff, sumDiff)
    }
}

console.log(minDiff)