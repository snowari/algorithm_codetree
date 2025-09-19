const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [t, a, b] = input[0].split(' ').map(Number);

const snData = input.slice(1, 1 + t).map(line => {
    const [char, pos] = line.split(' ');
    return [char, Number(pos)];
});

let specialCount = 0;

for (let k = a; k <= b; k++) {
    let minDistToS = Infinity;
    let minDistToN = Infinity;

    for (const [char, pos] of snData) {
        const distance = Math.abs(k - pos);

        if (char === 'S') {
            minDistToS = Math.min(minDistToS, distance);
        } else {
            minDistToN = Math.min(minDistToN, distance);
        }
    }

    if (minDistToS <= minDistToN) {
        specialCount++;
    }
}

console.log(specialCount);
