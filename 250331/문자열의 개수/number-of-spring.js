const fs=  require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let cnt = 0;

let str = []

for(let i=0; i<input.length; i++){
    if(input[i]==='0'){
        break;
    }else if(i%2 === 0){//홀수번째
        cnt ++;
        str.push(input[i])
    }else{
        cnt++;
    }
}

console.log(cnt+"\n"+str.join('\n'))