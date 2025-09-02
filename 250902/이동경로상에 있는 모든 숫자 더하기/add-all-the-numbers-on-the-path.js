const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
let commands = input[1];
const board = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));
// Please Write your code here.

const dx = [-1, 0, 1, 0];
const dy = [ 0, 1, 0,-1];
//북동남서


const mapper = { "R" : 0 , "D" : 3, "U" : 1, "L" : 2}


//console.log(board)
let x= Math.floor(n/2)
let y = Math.floor(n/2)
let answer = board[x][y]
const inRange = (x,y) => (x>=0 && x<n && y>=0 && y<n)

dirNum = 0 //북쪽 바라보고시작
commands = commands.split('')
commands.forEach(c =>{
    if(c==='R'){
        dirNum = (dirNum +1) %4
    }else if(c==="L"){
        dirNum = (dirNum +3) %4
    }else{
        let nx = x+dx[dirNum]
        let ny = y+dy[dirNum]
        if(inRange(nx,ny)){
            x=nx; y=ny;
            //console.log(board[x][y])
            answer += board[x][y]
        }
    }
})

console.log(answer)
