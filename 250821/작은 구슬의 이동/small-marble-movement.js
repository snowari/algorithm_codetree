const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

// dx, dy: R, L, U, D
const dx = [-1,1,0,0];
const dy = [0,0,-1,1];

const mapper = {
  "U": 0,
  "D": 1,
  "L": 2,
  "R": 3
};

function reverseDir(d) {
  if (d === 0) return 1; 
  if (d === 1) return 0; 
  if (d === 2) return 3; 
  return 2;            
}

let x=r, y=c;
let dir = mapper[d]; 

for (let i = 0; i < t; i++) {
  const nx = x + dx[dir];
  const ny = y + dy[dir];

  if (nx < 1 || nx > n || ny < 1 || ny > n) {
    dir = reverseDir(dir);
    
  } else {
    x = nx;
    y = ny;
  }
}

console.log(x, y);
