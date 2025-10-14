const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
const range =  m*2 //좌우 와이파이 거리
let cnt =0
let wifi = 0

if (range === 0) {
    arr.map(n=> n!==0 ? wifi ++ : "")

}else{
    for(let i=0 ; i< n ; i++){
        if(arr[i]>0){
            cnt ++
        }
        if(cnt==range){
            wifi++
            cnt =0
        }
    }
}
console.log(wifi)