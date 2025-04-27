const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push({ name, height, weight });
}

// Please Write your code here.

class Student {
    constructor(name, height, weight){
        this.name = name
        this.height = height
        this.weight = weight
    }
}

students = students.map(elem=> {
    return new Student(elem.name, elem.height, parseFloat(elem.weight.toFixed(1)))
})

const heightSort = (b, a)=> {
    return (a.height - b.height)
}

const nameSort = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
}


students.sort(nameSort)
console.log('name')
students.forEach((elem)=>{
console.log(`${elem.name} ${elem.height} ${elem.weight}`)
})
console.log('\n'+'height')
students.sort(heightSort)
students.forEach((elem)=>{
console.log(`${elem.name} ${elem.height} ${elem.weight}`)
})
//console.log('name' + '\n' + students.sort(nameSort))
//console.log('height' + '\n' + students.sort(heightSort))

