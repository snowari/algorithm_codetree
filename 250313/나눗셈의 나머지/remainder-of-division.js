const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split(' ')


let a = input[0]
let b = input[1]

let remainder= Array(10).fill(0)

while(a>1){
    //console.log(a%b)
    remainder[a%b]++;
    a= Math.floor(a/b);
}

let answer=0;

remainder.map(num => {
    answer += num * num
})

console.log(answer)

