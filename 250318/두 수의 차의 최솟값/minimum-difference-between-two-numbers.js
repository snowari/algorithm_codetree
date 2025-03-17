const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])
let nums = input[1].split(' ').map(Number)

//console.log(nums)

let min = nums[1]-nums[0]


for(let i=1; i<n-1 ; i++){
    if(nums[i+1]-nums[i] < min){
        min = nums[i+1]-nums[i]
    }
}

console.log(min)
