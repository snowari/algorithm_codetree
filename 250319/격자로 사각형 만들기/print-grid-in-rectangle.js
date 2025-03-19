const fs = require(('fs'))
const n = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let answer = Array(5).fill(0).map(()=> Array(5).fill(0))
for(let i=0; i<n ; i++){
    for(let j=0; j<n; j++){
        if(i==0 || j==0){
            answer[i][j] =1
        }else{
            answer[i][j] = answer[i-1][j] + answer[i][j-1] + answer[i-1][j-1]
        }

        

    

    }
}

for(let row of answer){
    console.log(row.join(' '))
}