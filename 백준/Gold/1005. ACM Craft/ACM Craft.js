const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(/\s+/);

let idx = 0;
const T = parseInt(input[idx++]);

for (let t = 0; t < T; t++) {
    const N = parseInt(input[idx++]);
    const K = parseInt(input[idx++]);

    const buildTimes = [0];
    for (let i = 0; i < N; i++) {
        buildTimes.push(parseInt(input[idx++]));
    }

    const adj = Array.from({ length: N + 1 }, () => []);
    const inDegree = Array(N + 1).fill(0);
    const resultTime = Array(N + 1).fill(0);

    for (let i = 0; i < K; i++) {
        const u = parseInt(input[idx++]);
        const v = parseInt(input[idx++]);
        adj[u].push(v);
        inDegree[v]++;
    }

    const W = parseInt(input[idx++]);

    const queue = [];
    
    for (let i = 1; i <= N; i++) {
        resultTime[i] = buildTimes[i];
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let qIdx = 0;
    while (qIdx < queue.length) {
        const curr = queue[qIdx++];

        for (const next of adj[curr]) {
            resultTime[next] = Math.max(resultTime[next], resultTime[curr] + buildTimes[next]);
            inDegree[next]--;

            if (inDegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    console.log(resultTime[W]);
}