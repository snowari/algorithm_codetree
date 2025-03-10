const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split('\n')

let cnt = Number(arr[0])

let numbers = arr[1].split(" ").map(Number);

//console.log(numbers)

let even = [];

for(let elem of numbers){
    if(elem %2 === 0) even.push(elem);
}

even.reverse()
console.log(even.join(" "))



