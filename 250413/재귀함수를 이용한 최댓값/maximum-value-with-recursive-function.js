const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

function solultion (arr){
    if(arr.length === 1){
        return arr[0]
    }
    const subMax = solultion(arr.slice(1))
    return arr[0] > subMax ? arr[0] : subMax
}

console.log(solultion(arr))