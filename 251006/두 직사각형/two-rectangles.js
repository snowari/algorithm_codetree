const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

// Please Write your code here.

if (x2 < a1 || x1 > a2 || y2 < b1 || y1 > b2) {
    console.log("nonoverlapping");
} else {
    
    console.log("overlapping");
}