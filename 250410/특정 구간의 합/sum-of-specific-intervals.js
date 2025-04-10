const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

//누적 구간 합 배열
const prefix = [];
prefix[0] = A[0]
for(let i=1; i<n ; i++){
    prefix[i] = prefix[i-1]+ A[i]
}

let answwer =  Array(m)

//쿼리만큼 반복해서 정답 배열에 넣기
for(let i = 0; i< m  ; i++){
    let start = queries[i][0]-1
    let end = queries[i][1]-1
    answwer[i] = start > 0 ? prefix[end] - prefix[start-1] : prefix[end]
}

console.log(answwer.join('\n'))




