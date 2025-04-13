const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

function soloution (n){
    if(n===1){
        return 1
    }
    return n + soloution(n-1)
}

let answer = soloution(n)

console.log(answer)