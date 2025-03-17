const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0])
let arr = input[1].map(Number)

let max = 0

for(let i =0; i<n ; i++){
    if(max === arr[i]){ //중복이 발생하면
        splice(i-1, 1);
        i=0;
    }

    if(max>arr[i]){
        max=arr[i];
    }
}

console.log(max)