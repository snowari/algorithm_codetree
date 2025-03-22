const fs = require('fs')
let input =fs.readFileSync(0).toString().trim()

function runLengthEncoding(input) {
    let encoded = ""; 
    let count = 1;

    for (let i = 1; i <= input.length; i++) {
        if (input[i] === input[i - 1]) {
            count++;
        } else {
            encoded += input[i - 1] + count;
            count = 1;
        }
    }

    return encoded;
}

const result = runLengthEncoding(input);
console.log(result.length)
console.log(result);