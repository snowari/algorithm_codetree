const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let count = 0
let max = 0

for(let i =0 ; i<n ; i++){
    if(arr[i]> t){
        count++
       // console.log("count : " , count)
       // console.log("arr : " , arr[i])
        if(count > max){
            max = count
           
         //   console.log("max : " , max)
        }
    }else{
        count = 0;
    }
}

if(count  > max) {
    max = count
}


console.log(max)