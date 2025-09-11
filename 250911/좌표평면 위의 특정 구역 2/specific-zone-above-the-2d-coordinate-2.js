const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

const MAX_ROW= 40000
const MAX_COL = 40000

//console.log(points)
let minArea = Number.MAX_SAFE_INTEGER

for(let i=0; i<n; i++){
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;

    for(let j=0; j<n; j++){ // 점 하나 빼고 난 후에 완탐
        if(i===j){
            continue;
        }
        const [x,y] = points[j]
        
        minX = Math.min(minX, x)
        minY = Math.min(minY, y)
        maxX = Math.max(maxX, x)
        maxY = Math.max(maxY, y)
    }

    const width = maxX- minX
    const height = maxY - minY
    let area = width*height
    minArea = Math.min(minArea , area)
}

console.log(minArea)

