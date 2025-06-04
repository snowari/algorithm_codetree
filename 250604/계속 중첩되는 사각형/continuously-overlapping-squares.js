const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    let [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1+100, y1+100, x2+100, y2+100]);
}

const matrix = new Array(201).fill().map(()=> new Array(201).fill(0))

rectangles.forEach((rect,idx) => {
    [x1, y1, x2, y2] = [rect[0], rect[1], rect[2], rect[3]]
    //console.log(x1,y1,x2,y2)
    //console.log(idx)
    
        for(let i=x1; i<x2; i++ ){
            for(let j=y1; j<y2; j++){
                
                matrix[i][j] = (idx%2 === 0)  ? 1 : 2;
            }
        }
    }
)

let cnt = 0
matrix.forEach(row=> {
    row.forEach(n => {
        if(n===2) cnt++
    })

})

console.log(cnt)
// Please Write your code here.
