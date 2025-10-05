const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

function isPossible(minVal) {
    if (arr[0] < minVal || arr[n - 1] < minVal) {
        return false;
    }

    const availableIndices = [];
    arr.forEach((elem, i) => {
        if (elem >= minVal) {
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

let maximin = 0;
for (let a = 1; a <= Math.min(arr[0], arr[arr.length - 1]); a++) {
    if (isPossible(a)) {
        maximin = a;
    } else {
        break;
    }
}

console.log(maximin);
