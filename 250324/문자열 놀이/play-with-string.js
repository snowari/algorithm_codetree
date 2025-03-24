const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

const [strPart, nPart] = input[0].split(' ')
const str = strPart
const n = Number(nPart)

const query = input.slice(1).map(line=>line.split(' '))

let tempStr = str.split('')
query.map(op=> {
    if(op[0]==='1'){
        let idx1= Number(op[1])-1
        let idx2= Number(op[2])-1
        let temp = ''
        temp = tempStr[idx1]
        tempStr[idx1] = tempStr[idx2]
        tempStr[idx2] = temp
        console.log(tempStr.join(''))
    }else if(op[0]==='2'){
        const fromChar = op[1]
        const toChar = op[2]
        tempStr =  tempStr.map(c=> (c=== fromChar ? toChar : c ))
        console.log(tempStr.join(''))
    }
})

