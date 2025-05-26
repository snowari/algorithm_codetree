const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let rectA = input[0].split(' ').map(Number);
let rectB = input[1].split(' ').map(Number);
let rectM = input[2].split(' ').map(Number);


rectA = rectA.map(n => n+1000)
rectB = rectB.map(n => n+1000)
rectM = rectM.map(n => n+1000)

// Please Write your code here.

//console.log(rectA, rectB, rectM)

let matrix = Array.from(Array(2001), () => Array(2001).fill(0));

const rects = [rectA, rectB]
rects.forEach(([x1, y1, x2, y2]) => {
    for( let i=x1 ; i<x2 ; i++){
        for(let j=y1 ; j<y2; j++){
            matrix[i][j]=1;
        }
    }
})

const [mx1 , my1, mx2, my2] = rectM

for(let i=mx1 ; i<mx2 ; i++){
    for(let j=my1; j<my2; j++) {
        matrix[i][j] =0;
    }
}

//console.log(matrix)

let answer =0

matrix.forEach((row)=> row.forEach(elem => {if(elem === 1) answer++}))

console.log(answer)

