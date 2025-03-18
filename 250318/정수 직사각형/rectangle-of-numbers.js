const fs = require ('fs')

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const n = input[0]
const m = input[1]
let cnt=1;

let array2D = Array(n).fill(0).map(() => Array(m).fill(0))

for(let i =0 ; i< n; i++){
    for(let j=0; j<m; j++){
        array2D[i][j] = cnt
        cnt ++;
    }
}

for(let row of array2D){
    let str = "";
    for(let elem of row){
        str += elem+" ";
    }
    console.log(str)
}

