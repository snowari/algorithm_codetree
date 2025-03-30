const fs =require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

const n = input[0]
let  nums = input.slice(1)

nums = nums.map(Number)

let add = 0
nums.forEach(n => add += n)

add = add.toString().split('')
add = [...add.slice(1),add[0]]
console.log(add.join(''))