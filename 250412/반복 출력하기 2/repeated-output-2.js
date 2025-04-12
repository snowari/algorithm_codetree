const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

function solution(n){
    if(n===0){
        return
    }
    console.log("HelloWorld")
    solution(n-1)
}

solution(n)