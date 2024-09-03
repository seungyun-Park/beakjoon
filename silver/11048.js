const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N, M;
let maze = [];
let dp = [];

rl.on('line', (line) => {
    if (!N) {
        [N, M] = line.split(' ').map(Number);
    } else {
        maze.push(line.split(' ').map(Number));
        if (maze.length === N) {
            solveMaze();
            rl.close();
        }
    }
});

function solveMaze() {
    // DP 배열 초기화
    dp = Array.from({ length: N }, () => Array(M).fill(0));

    // 첫 번째 칸 초기화
    dp[0][0] = maze[0][0];

    // 첫 번째 행 초기화
    for (let j = 1; j < M; j++) {
        dp[0][j] = dp[0][j-1] + maze[0][j];
    }

    // 첫 번째 열 초기화
    for (let i = 1; i < N; i++) {
        dp[i][0] = dp[i-1][0] + maze[i][0];
    }

    // DP 테이블 채우기
    for (let i = 1; i < N; i++) {
        for (let j = 1; j < M; j++) {
            dp[i][j] = Math.max(
                dp[i-1][j],     // 위에서 오는 경우
                dp[i][j-1],     // 왼쪽에서 오는 경우
                dp[i-1][j-1]    // 대각선에서 오는 경우
            ) + maze[i][j];
        }
    }

    // 결과 출력
    console.log(dp[N-1][M-1]);
}