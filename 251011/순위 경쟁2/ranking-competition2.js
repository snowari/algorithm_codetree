const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const changes = input.slice(1).map(line => line.split(" "));

let first  = ""
let ans = 0
let scoreA =0
let scoreB = 0
for(const [player, s] of changes){
    const score = Number(s)

    if(player === "A") scoreA += score
    else if(player === "B") scoreB += score
    
    let currentFirst = ""
    if(scoreA > scoreB) currentFirst = "A"
    else if(scoreB > scoreA) currentFirst = "B"
    else currentFirst = ""

    if(currentFirst !== first){
        ans++;
    }
    first = currentFirst
   
}

console.log(ans)