const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const numbers = input[0].split(' ').map(Number);

numbers.sort((a, b) => a - b);

const A = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    const B = numbers[i];
    for (let j = i; j < numbers.length; j++) {
        const C = numbers[j];
        for (let k = j; k < numbers.length; k++) {
            const D = numbers[k];

            if (!(A <= B && B <= C && C <= D)) {
                continue;
            }
            
            const possible = [
                A, B, C, D,
                A + B, B + C, C + D, D + A, A + C, B + D,
                A + B + C, A + B + D, A + C + D, B + C + D,
                A + B + C + D
            ].sort((a, b) => a - b);

            if (possible.join(',') === numbers.join(',')) {
                console.log(`${A} ${B} ${C} ${D}`);
                process.exit(0);
            }
        }
    }
}
