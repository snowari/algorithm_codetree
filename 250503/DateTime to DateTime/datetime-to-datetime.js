const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.


let d
let h
let m


if(C<11){
    m=(60+C)-11
    B--
}else{
    m= C-11
}

if(B<11){
    h=(B+24)-11
    A--
}else{
    h=B-11
}

d= A-11


//console.log(d,m,h)

let answer = (d*24*60)+h*60+m
//console.log(answer)




answer <0 ? console.log("-1"):console.log(answer)





