let fs=require("fs")

let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum=0;
let cnt =0;

for(let i =0 ; i<arr.length; i++ ){
    if(arr[i]>=250){
        break;
    }
    sum +=(arr[i])
    cnt++

}

avg = (sum/cnt).toFixed(1)


console.log(sum,avg)


