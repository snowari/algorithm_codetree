const fs = require('fs')
let input  = fs.readFileSync(0).toString().trim().split('\n')

let tmp = input[0].split(' ').map(Number)
const n = tmp[0]
const m = tmp[1]

tmp = input.slice(1)

let dots = tmp.map(row => row.split(' ').map(Number))

let strix = Array(n).fill(0).map(()=> Array(n).fill(0))

//console.log(strix)



let cnt = 1;

for(let i=0; i<m; i++){
    let x = dots[i][0]
    let y = dots[i][1]

    strix[x-1][y-1] = cnt
    cnt ++;
}

for(let row of strix){
    console.log(row.join(' '))
}


