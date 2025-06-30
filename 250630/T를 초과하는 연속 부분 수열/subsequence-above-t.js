const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let count = 1
let max = 1

for(let i =0 ; i<arr.length ; i++){
    if(arr[i]>= n){
        count++
    }else{
        if(count > max){
            max = count
            count = 1
        }
    }
}

console.log(max)