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

people = [];
for (let i = 0; i < n; i++) {
  if (seats[i] === 1) people.push(i);
}

let minDist = Infinity;
for (let i = 0; i < people.length - 1; i++) {
  const dist = people[i + 1] - people[i];
  if (dist < minDist) minDist = dist;
}

console.log(minDist);


