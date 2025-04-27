const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

//원본 인덱스 묶기
const indexArr = arr.map((n,idx)=>{
    return [n,idx]
})
//console.log(indexArr)

//정렬된 배열
sortedArr = [...indexArr].sort((a,b)=> a[0]-b[0])
//console.log(sortedArr)

const answer = [];
for(let i=0 ; i<n; i++){
     let originIdx = sortedArr[i][1]
     answer[originIdx] = i+1
}

console.log(answer.join(' '))


