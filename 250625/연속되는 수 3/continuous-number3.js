const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

let cnt =1 
let max = 1
for (let i=1; i<n ; i++){
    if( (arr[i] > 0 && arr[i-1] > 0) || (arr[i] < 0 && arr[i-1] <0)){
        cnt ++;
    }else{
        if(cnt>max) max= cnt
        cnt=1
    }
}

if(cnt> max) max= cnt

console.log(max)