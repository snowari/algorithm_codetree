const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const n = input[0]
const m = input[1]

let arr = Array(n).fill(0).map(()=> Array(m).fill(0))

let elem =1;
for(let sum=0; sum<=m+n-2; sum++){
    for(let i=0; i<=sum; i++){
        let j=sum-i

        if(i<n && j<m){
          arr[i][j] = elem;
            elem++;
        }

    }
}

for(let row of arr){
    console.log(row.join(' '))
}
