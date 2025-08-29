const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.

let answer = []
answer = Array(n).fill(0).map(()=>Array(m).fill(0))

function inRange(x,y) {
    return x>= 0 && x<n && y>=0 && y<n
}

const dx=[0,1,0,-1], dy = [1,0,-1,0]
let x=0, y=0
let dirNum = 0

answer[x][y] =1

for(let i=2; i<=n*n; i++){
    let nx= x+dx[dirNum], ny=y+dy[dirNum]

    if (!inRange(nx,ny)|| answer[nx][ny] !== 0){
        dirNum = (dirNum+1) %4
    }

    x += dx[dirNum]
    y += dy[dirNum]
    answer [x][y] = i
}

for (let i=0; i<n; i++){
    let print =""
    for (let j=0; j<n; j++){
        print+= `${answer[i][j]} `
    }
    console.log(print)
}

