const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, x, y] = input[0].split(' ').map(Number);

// Please Write your code here.

let min = 100

//순간이동 사용안함
let route1= Math.abs(a-b)

//x로 이동 후 이동
let route2 = Math.abs(x-a) + Math.abs(y-b)

let route3 = Math.abs(y-a) + Math.abs(x-b)

min = Math.min(route1, route2, route3)

console.log(min)