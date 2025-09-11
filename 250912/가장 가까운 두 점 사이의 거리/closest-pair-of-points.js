const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.


let min = Infinity

for(let i=0 ; i<n; i++){
    for(let j=0; j<n; j++){
        if(i===j){
            continue;
        }
        const [x1,y1] = points[i]
        const [x2,y2] = points[j]
      

        let diff = Math.pow(Math.abs(x1-x2),2)+Math.pow(Math.abs(y1-y2),2)
        min = Math.min(diff,min)
    }
}

console.log(min)