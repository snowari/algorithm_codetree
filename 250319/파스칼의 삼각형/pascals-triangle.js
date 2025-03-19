const fs = require('fs')
let n = fs.readFileSync(0).toString().trim().split(' ').map(Number)


let answer = []


for(let i=0; i<n ; i++){
    answer[i]= [];
    for(let j=0; j<= i; j++){
        if(j===0 || j===i){
            answer[i][j]=1
        }else{
            answer[i][j] = answer[i-1][j-1]+answer[i-1][j]
        }
    }

}

for(let row of answer){
    console.log(row.join(' '))
}

