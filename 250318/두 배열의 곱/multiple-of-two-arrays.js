const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n')

const splitIdx = input.indexOf('');
const part1=input.slice(0, splitIdx);
const part2=input.slice(splitIdx+1);


let arr1= part1.map(row=> row.split(' ').map((Number)))
let arr2= part2.map(row=> row.split(' ').map((Number)))

//console.log(arr1, arr2)

let answer = Array(3).fill(0).map(()=> Array(3).fill(0))
for(let i =0; i<3; i++){
    for(let j=0; j<3; j++){
        answer[i][j] = arr1[i][j] * arr2[i][j]
    }
}

for (let row of answer){
    let str = "";
    for(let elem of row){
        str += elem + " ";
    }
    console.log(str)
}


