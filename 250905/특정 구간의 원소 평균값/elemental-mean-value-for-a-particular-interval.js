const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let answer = 0

for(let i=0; i<n; i++){
    for(let j=i; j<n; j++){
        let sum =0;
        for(let k=i; k<=j ; k++){
            sum+=arr[k]
        }
    

        let itemCnt = j-i+1
        if(sum % itemCnt === 0) {
            const avg = sum / itemCnt
            

            for(let k=i; k<j; k++){
                if(avg === arr[k])
                answer ++
            }
        }
    }
}

answer+=arr.length

console.log(answer)
