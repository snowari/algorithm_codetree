const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

let dx = [0,1,0,-1], dy=[1,0,-1,0]//상하좌우
let cnt = 0;


for(let x=0; x<n; x++){
    for(let y=0; y<n; y++){
        let adjacency=0
        for(let i=0; i<4; i++){
            let nx = x+dx[i]
            let ny =y+dy[i]
            if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            if (grid[nx][ny] === 1) adjacency += 1;
        }
        if(adjacency >=3) cnt+=1

    }
}

console.log(cnt)
