const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const parseMove = (s) => {
    const [num, ch] = s.trim().split(/\s+/); 
    return [Number(num), ch];
};

const moves = input.slice(1, 1 + n + m).map(parseMove);
const lastOf = (arr) => (arr.length ? arr[arr.length - 1] : 0);

const movesA = moves.slice(0, n);
const movesB = moves.slice(n);


const expandTimeline = (moves) => {
    const pos = [];
    let cur = 0;
    for (const [dist, dir] of moves) {
        const step = dir === "R" ? 1 : -1;
        for (let i = 0; i < dist; i++) {
            cur += step;
            pos.push(cur);
        }
    }
    return pos;
};

const posA = expandTimeline(movesA);
const posB = expandTimeline(movesB);

const max = Math.max(posA.length, posB.length);
let meet = 0;
let prevEqual = false;

for (let t = 0; t < max; t++) {
    const aPos = t < posA.length ? posA[t] : lastOf(posA);
    const bPos = t < posB.length ? posB[t] : lastOf(posB);
    const equal = (aPos === bPos);

    if (equal && !prevEqual) {
        meet++;
    }
    prevEqual = equal;
}

console.log(meet);
