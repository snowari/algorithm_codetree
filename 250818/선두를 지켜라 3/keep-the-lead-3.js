const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  B_moves.push([v, t]);
}

const getPositon=(p)=>{
    let postion = [];
    let pos = 0
    for(let [v,t] of p){
        for(let i=0; i<t;i++){
            pos += v
            postion.push(pos)
        }
    }
    return postion
}


let a = getPositon(A_moves)
let b = getPositon(B_moves)

const time = a.length
let cnt = 0
let prevLead = null

for (let i=0; i<time ; i++){
    let lead = null
    let posA = a[i]
    let posB = b[i]
    posA > posB ? lead ='A' : posA===posB ? lead = 'S' : lead = 'B'
    prevLead !== lead ? cnt ++ : ""

    prevLead = lead
}

console.log(cnt)


