const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');


var odd = [];
var even = [];


for (let i=0; i<input.length; i+=2){
    odd.push(input[i])
}

for (let i=1; i<input.length; i+=2){
    even.push(input[i])
}


function add (arr){
    let i =0
    arr.forEach((elem)=>{
       i+=Number(elem)  
    })
    //console.log(i)
    return i;
}

//console.log(add(odd))






if(add(odd) >= add(even)){
    console.log(add(odd) - add(even))
}else {
    console.log(add(even)-add(odd))
}


