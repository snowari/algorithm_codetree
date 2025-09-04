const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

const total = arr.reduce((acc,cur)=> acc+cur,0)
const remain = total-s

let best ={sum : null, diff:Infinity, excluded:[]}

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++ ){
        let tmp = arr[i]+arr[j]
        const diff = Math.abs(remain-tmp)

        if(diff<best.diff){
            best ={
                sum:total - tmp,
                diff,
                excluded:[arr[i], arr[j]]
            }
        }
    }
}


console.log(best.diff)