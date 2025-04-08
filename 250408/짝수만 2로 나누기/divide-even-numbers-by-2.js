const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.

function divideEvens(arr){
    let answer = arr.map(n=> n %2 === 0 ? n/2 : n )
    console.log(answer.join(' '))
}

divideEvens(arr)
