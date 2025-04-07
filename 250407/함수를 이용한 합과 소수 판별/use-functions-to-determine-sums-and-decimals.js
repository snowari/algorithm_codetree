const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here. 

function isPrime(a){
    if(a<2){
        return false
    }
    for(let i= 2 ; i<=Math.sqrt(a) ;i++){
        if(a%i=== 0){
            return false
        }
    }
    return true
}

function isAddEven(a){
    let n1 = Math.trunc(a/10)
    let n2 = a%10
    if((n1+ n2) %2 ===0 ){
        return true
    }
    return  false
}


function solution(a,b){
    let cnt =0;
    for(let i=a; i<=b ; i++){
        if(isPrime(i) && isAddEven(i)){
            cnt ++
        }

    }
    return cnt

} 

console.log(solution(A,B))

