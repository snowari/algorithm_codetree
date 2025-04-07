const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.




function isContiguousSubarray(a,b){
    for(let i=0; i<n1 ; i++){
        if(a[i]=== b[0]){
            let tmp = a.slice(i,n2+1).toString()
            if(tmp===b.toString()){
                return(console.log("Yes"))
            }
        }
    }
    return(console.log("No"))
}

isContiguousSubarray(a,b)