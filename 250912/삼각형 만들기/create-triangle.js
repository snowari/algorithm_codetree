const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// Please Write your code here.


let maxArea = 0


const getArea = (dot1,dot2,dot3)=>{
    const [x1,y1] = dot1
    const [x2,y2] = dot2
    const [x3,y3] = dot3
    const cross = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);
    if(cross === 0){
        return -1
    }

    const side1 = Math.pow(dot2[0]-dot1[0], 2) + Math.pow(dot2[1]-dot1[1],2) 
    const side2 = Math.pow(dot3[0]-dot2[0], 2) + Math.pow(dot3[1]-dot2[1],2) 
    const side3 = Math.pow(dot3[0]-dot1[0], 2) + Math.pow(dot3[1]-dot1[1],2) 

    const sides = [side1,side2, side3].sort((a,b)=> a-b)

    //직각삼각형 판별
    if(sides[0] + sides[1] === sides[2]){
        const area = Math.sqrt(sides[0]) * Math.sqrt(sides[1])
        return area
    }else{
        return -1
    }

    

    
}



for (let i=0 ; i<n; i++){
    for(let j=0; j<n; j++){
        for(let k=0; k<n; k++){
            if(i===j || i===k || j===k){
                continue;
            }
            let dot1 = points[i]
            let dot2 = points[j]
            let dot3 = points[k]
            
            let area = getArea(dot1, dot2, dot3) 
            if(area === -1) {
                continue
            }else{
                maxArea = Math.max(area, maxArea)
            }

        }
    }
}

console.log(parseInt(maxArea))
