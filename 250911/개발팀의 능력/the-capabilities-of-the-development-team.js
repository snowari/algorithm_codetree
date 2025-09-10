const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);

// Please Write your code here.

let min = 1000

const clacDiff = (abilities) => {
let n = abilities.length
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
        let team1 = abilities[i] + abilities[j]
            for(let k=0; k<n; k++){
                if(k===i || k===j) continue;
                for(let l= k+1 ; l<n ; l++){
                    if(l===i || l===j) continue;
                    let team2 = abilities[k] + abilities[l]

                    let team3 = 0;
                    for(let m=0; m<n; m++){
                        if(m !== i && m!==j && m!==k && m!==l){
                            team3 = abilities[m]
                        }
                    }
                    let teams =[team1, team2, team3]
                    let set = new Set(teams)
                    if(set.size === 3){
                        let diff = Math.max(...teams) - Math.min(...teams)
                        min = Math.min(min,diff)
                    }

                }
            }

        }
    }
    return min === 1000 ? -1 : min
}

console.log(clacDiff(abilities))


