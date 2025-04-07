const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);


function solution(a,b){
    let cnt = 0
    //console.log(a,b)
    for(let i=a; i<=b ; i++){
        if(i%2 !==0){
            if(i%10 !==5){
                if(i%3===0 && i%9!==0){

                }else{
                    cnt++
                }
            }
        }
    }

    return cnt
}

console.log(solution(a,b))