const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
// Please Write your code here.

let cnt = 1
let max = 1
for (let i =0 ; i<n-1 ; i++){
    if(arr[i] < arr[i+1]){
        cnt++;
        if(cnt > max) max = cnt
    }else{
        cnt = 1;
    }
}

console.log(max)