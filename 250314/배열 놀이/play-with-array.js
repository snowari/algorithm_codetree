const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let num = input[0].split(' ').map(Number) //0엔 원소 갯수 ,  1엔 질의 갯수
let nums = input[1].split(' ').map(Number) //원소의 값 저장

let question=[1,2,3] //질의 저장

let queries = input.slice(2).map(line => line.split(' ').map(Number))
//console.log(queries)

/*
for(let i=0; i<num[1];i++){
    
}
*/
function findIndex (num){
    let index=0;
    for(let i=0 ; i< nums.length ; i++){
        if(nums[i]===num){ //인덱스 찾기
            index = i
           // console.log(index)
            break;
        }
    }
    if(index===0){
        return 0;
    }else
        return index+1;
}

//console.log("이건 배열 "+nums)

let i =0
let subArray=[]
queries.map(elem =>{
    //console.log("이건 지금 할 쿼리"+elem)
    if(elem[i]===1){
        console.log(nums[elem[1]-1])
    }else if(elem[i]===2){
        console.log(findIndex(elem[1]))
    }else{
        subArray=nums.slice(elem[1]-1,elem[2])
        console.log(subArray.join(' '))
    }
})


