const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// Please Write your code here.


let maxAreaX2 = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
           
            if (i === j || j === k || i === k) {
                continue;
            }

            const p1 = points[i];
            const p2 = points[j];
            const p3 = points[k];

            if (p1[0] === p2[0] && p1[1] === p3[1]) {
                const width = Math.abs(p1[0] - p3[0]);
                const height = Math.abs(p1[1] - p2[1]);
                const currentAreaX2 = width * height;
                if (currentAreaX2 > maxAreaX2) {
                    maxAreaX2 = currentAreaX2;
                }
            }
        }
    }
}

console.log(maxAreaX2);
