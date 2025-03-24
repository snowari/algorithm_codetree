const fs = require('fs')
let input = fs.readFileSync(0).toString().trim();

let ee = 0;
let eb = 0;



for(let i=0; i<input.length-1; i++){
    //let str = ''
    if(input[i]+input[i+1]==='ee'){
        ee++;
    }else if(input[i]+input[i+1]==='eb'){
        eb++;
    }
}
console.log(ee,eb)