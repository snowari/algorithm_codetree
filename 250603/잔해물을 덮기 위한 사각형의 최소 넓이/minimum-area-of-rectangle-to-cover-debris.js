const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let rect1 = input[0].split(' ').map(Number);
let rect2 = input[1].split(' ').map(Number);


const matrix  = new Array(2001).fill().map(()=> new Array(2001).fill(0))


let [x1, y1, x2, y2] = [rect1[0]+1000, rect1[1]+1000, rect1[2]+1000, rect1[3]+1000]
for(let i=x1 ; i<x2; i++){
    for(let j=y1; j<y2; j++){
        matrix[i][j] = 1
    }
}

[x1, y1, x2, y2] = [rect2[0]+1000, rect2[1]+1000, rect2[2]+1000, rect2[3]+1000]
for(let i=x1 ; i<x2; i++){
    for(let j=y1; j<y2; j++){
        matrix[i][j] = 0
    }
}


let minx = Infinity, miny = Infinity, maxx= -Infinity, maxy=-Infinity
matrix.forEach((row, i)=> {
    row.forEach((col, j)=>{
        if(col===1){
            if(i< minx) minx = i
            if(j< miny) miny = j;
            if(i> maxx) maxx = i;
            if(j> maxy) maxy = j;
        }
    })
})

let answer=0

if (minx !== Infinity) {
    answer = (maxx - minx + 1) * (maxy - miny + 1);
}

console.log(answer)



// Please Write your code here.