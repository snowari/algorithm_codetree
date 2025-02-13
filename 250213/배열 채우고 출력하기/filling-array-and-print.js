const fs = require("fs")

let arr = fs.readFileSync(0).toString().trim().split(" ");

arr.reverse()
console.log(arr.join(""))