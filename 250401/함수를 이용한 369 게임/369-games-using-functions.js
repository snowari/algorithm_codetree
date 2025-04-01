const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function fizzbuzz (a){
    let str = a.toString()
    str = str.split('')
    for(let i of str){
        if(i==='3' || i==='6' || i==='9'){
            return true;
        }
    }
}


let cnt=0
let a = A
for(let i =0 ; i<B-A; i++){
    if(fizzbuzz(a) || i%3===0){
        cnt++;
    }
    a++
}

console.log(cnt)