const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

const endDays = [31,28,31,30,31,30,31,31,30,31,30,31]

function solution(m,d){
    if(m<=12 && d<= endDays[m-1]){
        return console.log("Yes")
    }else
        return console.log("No")
}

solution(m,d)
