const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, k;
let coins = [];
let lineCount = 0;

rl.on('line', (line) => {
    if (lineCount === 0) {
        [n, k] = line.split(' ').map(Number);

        if (k > 10000) {
            console.log("k 값이 너무 큽니다.");
            rl.close();
            return;
        }
    } else {
        coins.push(Number(line));
    }

    lineCount++;

    if (lineCount === n + 1) {
        console.log(coinChange(n, k, coins));
        rl.close();
    }
});

function coinChange(n, k, coins) {
    const dp = new Array(k + 1).fill(0);
    dp[0] = 1;

    for (let coin of coins) {
        for (let i = coin; i <= k; i++) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[k];
}
//어이가없네