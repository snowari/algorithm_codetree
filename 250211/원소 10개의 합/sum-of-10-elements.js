const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ")

let sumVal = 0;
arr.forEach((val)=>{
    sumVal += Number(val);
})

console.log(sumVal);