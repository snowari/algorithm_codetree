const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let minCost = 10000
for(let a=1; a<10; a++){
    let cost = 0
    arr.forEach(elem => {
        if( a<= elem && elem <= a+k){
            return;
        }else if(elem < a){
            cost += a- elem
        }else {
            cost += elem - (a+2)
        }
    })

    minCost = Math.min(minCost, cost)
}

console.log(minCost)


