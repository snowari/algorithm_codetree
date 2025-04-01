const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function fizzbuzz (a){
    let str = a.toString()
    for(let i of str){
        if(i==='3' || i==='6' || i==='9'){
            return true;
        }
        
        
    }
    return false;
}


let cnt=0
for(let i =A; i<=B; i++){
    if(fizzbuzz(i) || i%3===0){
        cnt++;
    }
}

console.log(cnt)