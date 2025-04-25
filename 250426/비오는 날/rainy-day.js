const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

// Please Write your code here.


class Weather {
    constructor(date, day, weather){
        this.date = date
        this.day = day
        this.weather = weather
    }
}

let weathers=Array(n)

forecasts.forEach((arr,idx)=>{
   let [date, day, weather]  =  [arr[0],  arr[1], arr[2]] 
    weathers[idx] = new Weather(date,day,weather)
})


//let raindays=[]

weathers = weathers.sort((a,b)=> new Date(a.date) - new Date(b.date))

for(elem of weathers){
    if(elem.weather === 'Rain'){
        console.log(`${elem.date} ${elem.day} ${elem.weather}`)
        break;
    }
}