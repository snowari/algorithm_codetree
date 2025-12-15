const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

let maxCoins = 0;

for (let r = 0; r <= n - 3; r++) {
    for (let c = 0; c <= n - 3; c++) {
        
        let currentCoins = 0;
        
        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {
                currentCoins += grid[i][j];
            }
        }
        
        if (currentCoins > maxCoins) {
            maxCoins = currentCoins;
        }
    }
}

console.log(maxCoins);