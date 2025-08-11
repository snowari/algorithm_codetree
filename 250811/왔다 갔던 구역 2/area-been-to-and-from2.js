const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
let commands = input.slice(1, n + 1);
commands = commands.map(n => {
    const [num, char] = n.split(' ')
    return [Number(num), char]

})

let pos= 0;
const visited = new Map()
for (const [distance, dir] of commands){
    for(let i=0; i<distance; i++){
        const next = pos + (dir === "R"? 1: -1)
        const e= Math.min(pos,next)
        visited.set(e, (visited.get(e)||0) + 1)
        pos = next
    }
}

let totalLen = 0
for (const [,cnt] of visited){
    if(cnt>=2) totalLen +=1
}

console.log(totalLen)





// Please Write your code here.