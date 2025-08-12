const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);


let result = Array(n+1).fill(0)
//console.log(result)

let check = -1

for(let i=0; i<penalizedPersons.length; i++){
    const person = penalizedPersons[i]
    result[person]++;
    if(result[person]>=k){
        console.log(person)
        check = 0;
        return;
    }
        
}


check ==  -1 ? console.log("-1") : ""
