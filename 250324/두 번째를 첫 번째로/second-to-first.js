const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('');

const c = input[1]

input = input.map(ch => ch ===c ? input[0] : ch)

console.log(input.join(''))