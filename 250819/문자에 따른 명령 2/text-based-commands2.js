const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

const dx = [1,0,-1,0]
const dy = [0,-1,0,1]

//console.log(commands[0])

let x = 0, y=0
let dirNum =3

if(commands[0]==="R"){
    dirNum = (dirNum+1) %4
}else{
    dirNum = (dirNum-1+4) %4
}

//console.log(dirNum)

let nx = x+dx[dirNum]
let ny = y+dy[dirNum]

console.log(nx,ny)


