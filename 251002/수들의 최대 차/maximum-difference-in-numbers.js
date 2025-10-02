const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.


const sorted = arr.sort((a,b)=>(a-b))
let maxCount =0
for(let i=0; i<arr.length; i++){
    let count =0
    let diff = sorted[i]+k
    for(let j=0; j<n; j++){
        if(sorted[j] <= diff && sorted[j]>= sorted[i]){
            count ++
        }
    }
    maxCount = Math.max(maxCount, count)
}

console.log(maxCount)