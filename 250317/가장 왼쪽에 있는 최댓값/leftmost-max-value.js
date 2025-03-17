const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let n= Number(input[0])
let arr = input[1].split(' ').map(Number)


let indexArr = []

while (arr.length > 0){
    let max =arr[0];
    let index =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            //console.log(arr[i])
            max=arr[i];
            index=i;
        }
    }
    indexArr.push(index+1)
    arr=arr.slice(0, index);
}

console.log(indexArr.join(' '))



