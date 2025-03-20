const fs =require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')
let tmp = input[0]
tmp = tmp.split(' ').map(Number)
let n = tmp[0]
let c = tmp[1]

let coin = input.splice(1).map(line=> line.split(' ').map(Number))

let strix  = Array(n).fill(0).map(()=> Array(n).fill(0))

for(let i=0; i<c; i++){
    let x = coin[i][0]
    let y = coin[i][1]
    strix[x-1][y-1]= 1
}

for(let row of strix){
    console.log(row.join(' '))
}



