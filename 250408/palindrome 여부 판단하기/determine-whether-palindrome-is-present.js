const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.

function isPalindrome(s){
    let tmp =  [...s].reduce((acc,char)=>char + acc,"")
    if(s===tmp){
        return "Yes"
    }else{
        return "No"
    }

}

console.log(isPalindrome(str))