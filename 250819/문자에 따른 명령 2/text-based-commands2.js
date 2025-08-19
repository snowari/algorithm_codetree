const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

const dx = [1,0,-1,0]
const dy = [0,1,0,-1]

let x = 0, y=0
let dirNum =3
 
for (let c of commands){
    if(c==="R"){
        dirNum = (dirNum+1) %4
    }else if(c==="L"){
        dirNum = (dirNum+3) %4
    }else{
        continue
    }
    x+=dx[dirNum]
    y+=dy[dirNum]
}


console.log(x,y)


