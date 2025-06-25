const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

let cnt =1 
let answer = 0
let max = 1
arr[0] > 0 ? answer = 1 : answer = -1
for (let i=1; i<arr.length ; i++){
    if(answer>0){
        if(arr[i]>0){
            cnt ++
        }else{
            answer = -1
            if(cnt >= max){
                max = cnt;
            }
            cnt = 1;
        }
    }else{
        if(arr[i]<0){
            cnt ++;
        }else{
            answer = 1
            if(cnt >= max){
                max = cnt;
            }
            cnt = 1;
        }
    }
}

console.log(max)