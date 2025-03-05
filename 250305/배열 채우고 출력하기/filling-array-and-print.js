
const fs = require("fs")


let arr = fs.readFileSync(0).toString().trim().split(" ")


let str="";
//let answer= []
for (let i=9; i>=0; i--){
    str +=arr[i]+ "";
}

console.log(str);