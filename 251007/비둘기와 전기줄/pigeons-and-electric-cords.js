const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const movements = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const position = Array(11).fill(-1)

//console.log(count)
let count =0
for(let i=0; i<n; i++){
    const birdsNum = movements[i][0]
    const birdPosition = movements[i][1]
    if(position[birdsNum]!== -1 && position[birdsNum] !== birdPosition){ //서잇는 곳 바뀜
        count++
    }
    position[birdsNum] = birdPosition
    
}

console.log(count)