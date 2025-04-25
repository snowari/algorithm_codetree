const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}
// Please Write your code here.

//console.log(words)


const len = t.length
const candiate = []
words.map(n => {
    t===n.slice(0,len)? candiate.push(n) : ''
})

const answer = candiate.sort()
console.log(answer[k-1])
