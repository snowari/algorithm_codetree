const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

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


let a = getPositon(aData)
let b = getPositon(bData)

//console.log(a)

const time = a.length
let cnt = 0
let prevLead = null

for (let i=0; i<time ; i++){
    let lead = null
    let posA = a[i]
    let posB = b[i]
    posA > posB ? lead ='A' : posA===posB ? lead = prevLead : lead = 'B'
    prevLead !== lead ? cnt ++ : ""

    prevLead = lead
}

console.log(cnt-1)

