const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split(' ')

let arr = ['L','E','B','R','O','S']

let answer=0
let index=0

for(let i=0; i<5; i++){
    if(arr[i]==input){

        index = i  //배열 인덱스
        answer++; // 같은 숫자 개수
    
    }
}

answer != 0 ? console.log(index) : console.log("None")
