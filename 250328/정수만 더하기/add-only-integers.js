const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()


let cnt =0;
for (let c of input){
    let a_num = c.charCodeAt(0)
    if(a_num>=48 && a_num<=57){
        cnt += Number(c);
    }
}

console.log(cnt)