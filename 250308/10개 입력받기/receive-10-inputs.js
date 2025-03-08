const fs =  require("fs")

let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let cnt =0

for(let i=0 ; i<arr.length; i++){
    if((arr[i])===0){
        break;
    }

    cnt++;
}

let answer =[];

for (let i=0; i<cnt ; i++){
    answer.push(arr[i]);
}

let sum = 0;
for (let elem of answer) sum +=elem;

console.log(sum, (sum/cnt).toFixed(1));

