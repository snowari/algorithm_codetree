let fs=require("fs")

let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum=0;
let avg=0;

for(let i =0 ; i<arr.length; i++ ){
    if(arr[i]>=250){
        avg=sum/i
        break;
    }
    sum +=(arr[i])

}


console.log(sum,avg.toFixed(1))


