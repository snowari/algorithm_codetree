const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number)


const n = input[0]

let arr = Array(n).fill(0).map(()=> Array(n).fill(0))
let elem = 1;
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        arr[j][i] = elem;
        elem++;
    }

}

for(let row of arr){
    console.log(row.join(' '))
}

