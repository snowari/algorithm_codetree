const fs = require("fs")

let arr = fs.readFileSync(0).toString().split(" ")



let sum = 0
let cnt = 0
for(let i=0; i<arr.length; i++){
    if(Number(arr[i])>=250){
        break;
        
    }
    if(i===9){
        sum +=Number(arr[i])
        cnt++;
        break;
    }
    sum +=Number(arr[i])
    cnt ++;
}

let answer = (sum/cnt).toFixed(1)


console.log(sum,answer)
