const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.
let endDays = [31,28,31,30,31,30,31,31,30,31,30,31]


function leapYear(y){
    if((y%4===0 && y%100!==0 )||(y%4===0 && y%100===0 && y%400===0) ){
        endDays[1]=29

    }
}

leapYear(year)

function whatSeason(m){
    if(m<=5 && m>=3){
        console.log("Spring")
    }else if(m<=8 && m>=6){
        console.log("Summer")
    }else if(m<=11 && m>=9){
        console.log("Fall")
    }else
        console.log("Winter")
}

if(month<=12 && day<=endDays[month-1]){
    whatSeason(month)
}else{
    console.log(-1)
}

