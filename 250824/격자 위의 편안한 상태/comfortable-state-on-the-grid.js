const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) moves.push(input[i].split(" ").map(Number));

const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
const key = (x,y)=>`${x}#${y}`;
const has = new Set();
const adj = new Map();

function getAdj(k){ return adj.has(k)?adj.get(k):0; }
function setAdj(k,v){ if(v===0) adj.delete(k); else adj.set(k,v); }

function paintAndCheck(x,y){
  const k = key(x,y);
  if (has.has(k)) {
    return getAdj(k)===3 ? 1 : 0;
  }
  let cnt = 0;
  const nks = [];
  for (const [dx,dy] of dirs) {
    const nk = key(x+dx,y+dy);
    nks.push(nk);
    if (has.has(nk)) cnt++;
  }
  has.add(k);
  setAdj(k,cnt);
  for (const nk of nks) if (has.has(nk)) setAdj(nk, getAdj(nk)+1);
  return cnt===3 ? 1 : 0;
}

let out = [];
for (let i=0;i<m;i++){
  const [x,y]=moves[i];
  out.push(String(paintAndCheck(x,y)));
}
console.log(out.join("\n"));
