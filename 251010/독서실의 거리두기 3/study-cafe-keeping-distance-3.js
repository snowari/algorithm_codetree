const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let seats = input[1].split("").map(Number);

// Please Write your code here.
let cnt =0
let farIndexEnd =0
let maxLen = 0

for(let i=1; i<n; i++){
    if(seats[i]===0){
        cnt ++
        if(cnt > maxLen){
            maxLen = cnt
            farIndexEnd = i
        }
    }else{
        cnt =0
    }
}

let startIndex = farIndexEnd - maxLen + 1
const middleIndex = Math.floor((startIndex + farIndexEnd)/2)
seats[middleIndex] = 1


//console.log(seats)

console.log(middleIndex - startIndex + 1)

