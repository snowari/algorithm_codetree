const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

let positionsA = [0]; 
let positionsB = [0]; 


let posA = 0;

for (let [dir, time] of movesA) {
    for (let i = 0; i < time; i++) {
        if (dir === "R") posA++;
        else posA--;
        positionsA.push(posA);
    }
}

let posB = 0;
for (let [dir, time] of movesB) {
    for (let i = 0; i < time; i++) {
        if (dir === "R") posB++;
        else posB--;
        positionsB.push(posB);
    }
}

const maxLen = Math.max(positionsA.length, positionsB.length);

while (positionsA.length < maxLen) positionsA.push(positionsA[positionsA.length - 1]);
while (positionsB.length < maxLen) positionsB.push(positionsB[positionsB.length - 1]);

let found = false;
for (let t = 1; t < maxLen; t++) { 
    if (positionsA[t] === positionsB[t]) {
        console.log(t); 
        found = true;
        break;
    }
}

if (!found) console.log(-1);