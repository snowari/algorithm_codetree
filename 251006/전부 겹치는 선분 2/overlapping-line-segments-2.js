const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
let x1List = [], x2List = [];
for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(' ').map(Number);
    x1List.push(x1);
    x2List.push(x2);
}

let answer = "No"

// Please Write your code here.
for(let i=0; i<n; i++){//
let maxX = 1
let minX = 100
    for(let j=0; j<n; j++){
        if(i===j){
            continue
        }
        minX = Math.min(minX, x1List[j])
        maxX = Math.max(maxX, x2List[j])

    }
    if(minX <= maxX) {
        answer = "Yes"
        break;
    }

}

console.log(answer)