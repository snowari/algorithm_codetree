const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let currentLine = 0;
const T = parseInt(input[currentLine++]); 

const results = [];

for (let i = 0; i < T; i++) {
 
    const [x1, y1, x2, y2] = input[currentLine++].split(' ').map(Number);
    const n = parseInt(input[currentLine++]); 
    
    let count = 0;

    for (let j = 0; j < n; j++) {
        const [cx, cy, r] = input[currentLine++].split(' ').map(Number);

        const dist1 = Math.pow(x1 - cx, 2) + Math.pow(y1 - cy, 2);
        const dist2 = Math.pow(x2 - cx, 2) + Math.pow(y2 - cy, 2);
        const rSquare = Math.pow(r, 2);

        const isStartInside = dist1 < rSquare;
        const isEndInside = dist2 < rSquare;

      
        if (isStartInside !== isEndInside) {
            count++;
        }
    }
    results.push(count);
}

console.log(results.join('\n'));