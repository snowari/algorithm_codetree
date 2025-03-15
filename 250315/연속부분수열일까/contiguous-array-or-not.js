const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let cnt = input[0];
let arr1 = input[1];
let arr2 = input[2];

 cnt = cnt.split(' ').map(Number)
 arr1 = arr1.split(' ').map(Number)
 arr2 = arr2.split(' ').map(Number)

let answer = "No"

for(let i=0; i<= cnt[0]- cnt[1]; i++){
    if (arr1.slice(i, i+cnt[1]).join(' ') === arr2.join(' ')){
        answer  ="Yes"
        break;
    }

}

console.log(answer)



