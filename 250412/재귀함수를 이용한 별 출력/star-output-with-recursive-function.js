const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

function solution(n){
    if(n===0){
        return
    }
    solution(n-1)
    for(let i=0; i<n; i++){
        process.stdout.write("*")
    }
    console.log()
}

solution(n)