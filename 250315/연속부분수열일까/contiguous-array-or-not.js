const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let cnt = input[0];
let arr1 = input[1];
let arr2 = input[2];

 cnt = cnt.split(' ').map(Number)
 arr1 = arr1.split(' ').map(Number)
 arr2 = arr2.split(' ').map(Number)

let index=-1

for(let i=0; i<cnt[0]; i++){
    if(arr1[i]===arr2[0]){
        index=i
        break;
    }
}

if(index=== -1 || index + cnt[1] > cnt [0]){
    console.log("No")
    process.exit(0)
}




for(let i=0;i<cnt[1];i++){
    if(arr1[index+i]!== arr2[i]){
        console.log("No")
        process.exit(0);
    }
}
console.log("Yes")



