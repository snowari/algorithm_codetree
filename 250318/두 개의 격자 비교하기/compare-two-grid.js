const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split('\n')

let nm = input[0].split(' ').map(Number)
const n = nm[0]
const m = nm[1]

input = input.slice(1)
let arr1 = input.slice(0, n)
let arr2 = input.slice(n)

arr1 = arr1.map(row=> row.split(' ').map(Number))
arr2 = arr2.map(row=> row.split(' ').map(Number))

let answer  = Array(n).fill(0).map(()=> Array(m).fill(0))

for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
        if(arr1[i][j]===arr2[i][j])
            answer[i][j]=0
        else
            answer[i][j]=1
    }
}


for(let row of answer){
    str = '';
    for(let elem of row){
        str = str + elem + " ";
    }
    console.log(str)
}
