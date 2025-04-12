const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

function ascending(n){
    if(n===0){
        return
    }
    ascending(n-1);
    process.stdout.write(n+" ")
}

function descending(n){
        if(n===0){
        return
    }
    process.stdout.write(n+" ")
    descending(n-1);
}

ascending(n)
console.log()
descending(n)