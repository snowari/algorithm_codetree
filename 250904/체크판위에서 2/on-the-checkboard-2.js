const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.
function solution(grid) {
    const start = grid[0][0]
    const end = grid[R-1][C-1]

    let cnt =0

    for(let r1 =1; r1<R-1; r1++){
        for(let c1=1;c1<C-1; c1++){
            if(grid[r1][c1] === start) continue; //색 같으면 건너뜀
            for(let r2= r1+1; r2<R-1; r2++){
                for(let c2= c1+1; c2<R-1; c2++){
                    const mid1= grid[r1][c1]
                    const mid2= grid[r2][c2]

                    if(mid1 !== mid2 && mid2 !==  end)
                        cnt++
                }
            }
        }
    }
    return cnt
}

console.log(solution(grid))