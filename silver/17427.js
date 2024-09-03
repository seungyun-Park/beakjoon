const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const N = parseInt(line);
    let result = 0;

    for (let i = 1; i <= N; i++) {
        result += i * Math.floor(N / i);
    }

    console.log(result);
    rl.close();
});