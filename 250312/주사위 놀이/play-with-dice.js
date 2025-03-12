const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let answer = Array(7).fill(0)

input.forEach(num=> answer[num]++)

for (let i=1; i<7; i++){
    console.log(i+" - "+answer[i])
}