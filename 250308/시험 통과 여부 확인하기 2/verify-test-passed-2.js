const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split('\n')

let cnt = Number(arr[0])

let students = arr.slice(1, cnt+1).map(line => line.split(' '))

function avg (arr){
    let sum =0;
    arr.map(Number).forEach(num => sum+=num)
    //console.log(arr)
    
    return sum/arr.length;
}

var pass=0;
for(let i=0; i<students.length; i++){
    let score;
    score=avg(students[i]);
    if(score>=60){
        console.log("pass")
        pass++;
    }else{
        console.log("fail")
    }
}
console.log(pass)