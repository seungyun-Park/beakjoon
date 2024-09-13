import sys

def coin_change(n, k, coins):
    dp = [0] * (k + 1)
    dp[0] = 1

    for coin in coins:
        for i in range(coin, k + 1):
            dp[i] += dp[i - coin]

    return dp[k]

n, k = map(int, input().split())

if k > 10000:
    print("k 값이 너무 큽니다.")
    sys.exit()

coins = [int(input()) for _ in range(n)]

print(coin_change(n, k, coins))