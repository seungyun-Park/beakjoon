const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const graph = input.slice(2, N + 2).map(x => x.split(' ').map(Number));
const plan = input[N + 2].split(' ').map(city => parseInt(city) - 1);

function createSet(n) {
    return {
        parent: Array(n).fill().map((_, i) => i),
        rank: Array(n).fill(0)
    };
}

function find(set, x) {
    while (set.parent[x] !== x) {
        x = set.parent[x];
    }
    return x;
}

function union(set, x, y) {
    let rootX = find(set, x); //x의 루트노드
    let rootY = find(set, y); //y의 루트노드

    if (rootX === rootY) return; //루트 노드가 같으면 리턴

    if (set.rank[rootX] < set.rank[rootY]) {
        set.parent[rootX] = rootY;
    } else if (set.rank[rootX] > set.rank[rootY]) {
        set.parent[rootY] = rootX;
    } else {
        set.parent[rootY] = rootX;
        set.rank[rootX]++; // 높이가 같으면 합친 후 높이 1 증가
    }
}

const set = createSet(N);

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        if (graph[i][j] === 1) {
            union(set, i, j);
        }
    }
}

let possible = true;
for (let i = 1; i < M; i++) {
    if (find(set, plan[i - 1]) !== find(set, plan[i])) {
        possible = false;
        break;
    }
}

console.log(possible ? "YES" : "NO");