const fs = require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n')
let cntArr = Array(10).fill(0);

let arr = input[1].split(' ').map(Number)

arr.forEach(num=>cntArr[num]++)
cntArr.slice(1).forEach(num=> console.log(num))

