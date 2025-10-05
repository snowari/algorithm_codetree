const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

function isPossible(maxVal) {
    if (arr[0] > maxVal || arr[n - 1] > maxVal) {
        return false;
    }

    const availableIndices = [];
    arr.forEach((elem, i) => {
        if (elem <= maxVal) {
            availableIndices.push(i);
        }
    });

    for (let i = 1; i < availableIndices.length; i++) {
        const dist = availableIndices[i] - availableIndices[i - 1];
        if (dist > k) {
            return false;
        }
    }
    
    return true;
}

for (let m = Math.max(arr[0], arr[n - 1]); m <= 100; m++) {
    if (isPossible(m)) {
        console.log(m);
        break;
    }
}
