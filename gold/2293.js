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
    // DP 테이블 초기화
    const dp = new Array(k + 1).fill(0);
    dp[0] = 1;  // 0원을 만드는 경우의 수는 1가지 (아무 동전도 사용하지 않음)

    // 각 동전에 대해
    for (let coin of coins) {
        // 현재 동전으로 만들 수 있는 모든 금액에 대해
        for (let i = coin; i <= k; i++) {
            // i원을 만드는 경우의 수에 (i-coin)원을 만드는 경우의 수를 더함
            dp[i] += dp[i - coin];
        }
    }

    return dp[k];
}