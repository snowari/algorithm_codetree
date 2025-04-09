const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.

function solution (str, subStr) {
    for(let i=0 ; i<text.length - pattern.length+1 ; i++){
        //console.log(i)
        if(str[i]===subStr[0]){
            //console.log("!")
            let temp = str.slice(i,i+subStr.length)
            //console.log(temp)
             if(temp === subStr) return i
        }
    }
    return -1

}

console.log(solution(text,pattern))