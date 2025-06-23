const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);


let cnt =1
let answer= 1
//4 3 3 3 3
for (let i = 1; i < arr.length ; i++){
    if(arr[i] === arr[i-1]){
        cnt ++;
        if(cnt > answer) answer = cnt
    }else{
        cnt =1
    }

}

console.log(answer)

// Please Write your code here.