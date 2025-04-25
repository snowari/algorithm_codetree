const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let answer = []

arr.forEach((n,idx)=> {
    if(idx===0){
        answer.push(n)
    }else if(idx!==0 && idx%2==0){
        //console.log(idx)
        let tmp = arr.slice(0,idx+1)
      //  console.log(tmp)
        tmp = tmp.sort((a,b)=> a-b)
        answer.push(tmp[(tmp.length-1)/2])
       // console.log(n)
    }
})

console.log(answer.join(' '))
