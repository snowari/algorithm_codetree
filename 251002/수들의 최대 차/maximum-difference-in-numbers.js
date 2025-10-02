const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.


let sorted = [... new Set(arr.sort((a,b)=> (a-b)))]
//console.log(sorted)
let maxCount =0
for(let i=0; i<sorted.length; i++){
    let diff
    let count =0
    for(let j=0; j<n; j++){
        diff = Math.abs(sorted[i]-arr[j])
        if(diff<= k){
            count++
        }
    }
    maxCount = Math.max(count, maxCount)
}

console.log(maxCount-1)