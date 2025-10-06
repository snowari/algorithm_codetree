const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x1, x2, x3, x4] = input[0].split(' ').map(Number);
// Please Write your code here.

 if(x3<= x2 || x1>= x3){
    console.log("intersecting")
 }else{
    console.log("nonintersecting")
 }