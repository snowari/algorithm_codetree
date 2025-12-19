const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');


const [n, t] = input[0].split(' ').map(Number);
const l = input[1].trim().split(/\s+/).map(Number);
const r = input[2].trim().split(/\s+/).map(Number);
const d = input[3].trim().split(/\s+/).map(Number);

const combined = [...l, ...r, ...d];
const totalElements = 3 * n;

const shift = t % totalElements;


const rotated = new Array(totalElements);
for (let i = 0; i < totalElements; i++) {
    
    rotated[(i + shift) % totalElements] = combined[i];
}


const resL = rotated.slice(0, n);
const resR = rotated.slice(n, 2 * n);
const resD = rotated.slice(2 * n, 3 * n);


console.log(resL.join(' '));
console.log(resR.join(' '));
console.log(resD.join(' '));