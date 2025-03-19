const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const n = input[0]
const m = input[1]

let arr = Array(n).fill(0).map(()=>Array(m).fill(0))

let elem = 0

for(let j =0 ; j<m ; j++){
    if(j%2===0){
        for(let i=0; i<n; i++){
            //console.log(i, j)
            arr[i][j]= elem;
            elem++;
        }
    }
    else{
        for(let i=n-1; i>=0; i--){
            arr[i][j]= elem;
            elem++;
        }
    }

    
}

for( let row of arr){
    console.log(row.join(' '))
}
