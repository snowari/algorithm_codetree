const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.


let index=0
const solution = (arr,  index) =>{
    if(arr.length === 0 )return 1
    if(index === arr.length - 1 ) return arr[index]

    const curr = arr[index]
    const next = solution(arr,index+1)

    const gcd = (a,b) => (b===0 ? a : gcd(b,a%b))

    return  (curr * next) / gcd(curr,next)
};

console.log(solution(numbers,index))