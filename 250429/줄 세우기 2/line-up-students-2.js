const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push([height, weight]);
}

// Please Write your code here.

class Students  {
    constructor(height,weight,number){
        this.height = height
        this.weight = weight
        this.number = number
    }
}

const students = studentInputs.map((n,idx)=>{
    return new Students(n[0], n[1],idx+1)
})

students.sort((a,b) =>{
    if(a.height!==b.height){
     return a.height - b.height
    }else{
        return b.weight - a.weight
    }
})

students.forEach(n=>{
    console.log(`${n.height} ${n.weight} ${n.number}`)
})


//console.log(students)