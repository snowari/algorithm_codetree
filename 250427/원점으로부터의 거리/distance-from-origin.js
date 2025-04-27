const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here


const distantCalc = (x,y) => {
    x= Math.abs(0 - x)
    y= Math.abs(0 -y)
    return x+y
}

const distant = points.map((n, idx)=> {
    return [distantCalc(n[0], n[1]),idx+1]
})

distant.sort((a,b) => a[0] - b[0])

//console.log(distant)
distant.forEach(n=>{
    console.log(n[1])
})



