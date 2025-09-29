const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1];

// Please Write your code here.
let maxDist = 0;

for(let i=0; i<n; i++){
    if(seat[i] === '0'){
        const tempSeat = seat.split('')
        tempSeat[i] = '1' //임시 배치

        let currentMinDist = n;
        let lastOne = -1;

        for(let j=0; j<n; j++){
            if(tempSeat[j]=== '1'){
                if(lastOne !== -1){
                    currentMinDist = Math.min(currentMinDist, j-lastOne)
                }
                lastOne = j
            }
        }

        maxDist = Math.max(maxDist, currentMinDist)

    }
}

console.log(maxDist)