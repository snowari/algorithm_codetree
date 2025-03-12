const fs = require('fs')
let patients = fs.readFileSync(0).toString().trim().split('\n')


let office = Array(4).fill(0) //진료소 A B C D 

//console.log(patients)


const splitPatients = patients.map(elem=>elem.split(' '))

//console.log(splitPatients)


splitPatients.forEach(num=>{
    if(num[0]==='Y' && Number(num[1])>=37){
        office[0]++;
    }else if(num[0]==='N' && Number(num[1])>=37){
        office[1]++;
    }else if(num[0]==='Y' && Number(num[1])<37){
        office[2]++;
    }else
        office[3]++;
})


 //console.log(office)



if(office[0]>=2){
    console.log(office.join(' ') + " E");
}else{
    console.log(office.join(' '))
}



