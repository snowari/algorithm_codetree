const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number)


let cnt =0
for(let i=0; i<arr.length; i++){
    if(arr[i]===0){
        break;
    }
    cnt++;
}

let arr2=[]
for(let i=0; i<cnt; i++){
    arr2[i]=arr[i]
}

let ans = 0;
cnt=0;
for(elem of arr2){
    if(elem%2===0){
        ans+=elem
        cnt++;
    }
}

console.log(cnt, ans)

