const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let matrix = Array.from(Array(201), ()=> Array(201).fill(0))



rects.forEach((rect)=> {
    const x = rect[0]+100
    const y = rect[1]+100
    for(let i=x ; i<x+8; i++){
        for(let j=y; j<y+8; j++ ){
            matrix[i][j] = 1
        }
    }
})

let cnt =0
matrix.forEach((row)=>{
    row.forEach(n=>{
        if (n===1){
            cnt++
        }
    })
})

console.log(cnt)