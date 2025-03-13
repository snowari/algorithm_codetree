const fs = require('fs')

let input = fs.readFileSync(0).toString().trim()

let arr = ['L','E','B','R','O','S']

let index=-1

for(let i=0; i<6; i++){
    if(arr[i]===input){
        
        index = i  //배열 인덱스
    }
}

index != -1 ? console.log(index) : console.log("None")
