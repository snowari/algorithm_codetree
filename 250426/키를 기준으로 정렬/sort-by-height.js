const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}
// Please Write your code here.
class Student {
    constructor(name, h, w){
        this.name = name
        this.h = h
        this.w = w
    
    }
}

const students = studentsInput.map((elem)=>{
    const [name, h,w] = [elem[0], elem[1], elem[2]]
    return new Student(name,Number(h),Number(w))
})

//console.log(students)
students.sort((a,b)=> a.h - b.h)

students.forEach( n=> {
    console.log(`${n.name} ${n.h} ${n.w}`)
})