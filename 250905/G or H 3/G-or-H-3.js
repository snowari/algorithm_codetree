const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
let people = [];
for (let i = 1; i <= n; i++) {
  const [x, c] = input[i].split(' ');

  people.push([Number(x), c]);
}


people.forEach(person => {
    person[1] = (person[1] === "G") ? 1 : 2
    })

people.sort((a,b)=> a[0]-b[0])
//console.log(people)

let currentSum = 0
let maxSum =0
let left =0
for(let right =0; right<n; right++){
    currentSum += people[right][1]

    while(people[right][0] - people[left][0] > k){
        currentSum-=people[left][1]
        left++
    }

    maxSum = Math.max(maxSum, currentSum)

}

console.log(maxSum)