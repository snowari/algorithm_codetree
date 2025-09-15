const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input.shift().split(' ').map(Number);
const pArr = [];
const sArr = [];
for (let i = 0; i < n; i++) {
    const [p, s] = input.shift().split(' ').map(Number);
    pArr.push(p);
    sArr.push(s);
}

// Please Write your code here.
//배송비는 따로 선물 가격만 반 값 

//쿠폰 쓸 선물 1개 고르고 나머지 뽑기
let maxCnt = 0

for(let i=0; i<n; i++){
    const costs= []
    for(let j=0; j<n; j++){
        let totalCost;
        if(i===j){
            totalCost = (pArr[j] /2) + sArr[j]
        }else{
            totalCost = pArr[j] + sArr[j]
        }
        costs.push(totalCost)  
    }
    costs.sort((a,b) => a-b)

    let currentSum =0
    let currentCount=0
    for(let k=0; k<n; k++){
        currentSum += costs[k]
        if( currentSum<=b){
            currentCount++
        }else{
            break
        }
    }

    maxCnt = Math.max(currentCount, maxCnt)
}

console.log(maxCnt)

