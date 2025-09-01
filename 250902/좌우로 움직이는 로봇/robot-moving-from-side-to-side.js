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
    const pos =[];
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

const T = Math.max(posA.length, posB.length) - 1; 

const fillTo = (arr, len) => {
  const last = arr[arr.length - 1] ?? 0;
  while (arr.length < len) arr.push(last);        
};
fillTo(posA, T + 1);
fillTo(posB, T + 1);


let meet = 0;
for (let i = 1; i <= T; i++) {
  if (posA[i] === posB[i] && posA[i - 1] !== posB[i - 1]) meet++;
}
console.log(meet);
