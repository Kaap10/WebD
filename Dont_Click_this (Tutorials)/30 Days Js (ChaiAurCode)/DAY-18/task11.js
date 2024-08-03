function knapsack(weights, values, capacity) {
    let n = weights.length;
    let dp = Array(n + 1)
      .fill()
      .map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(
            dp[i - 1][w],
            dp[i - 1][w - weights[i - 1]] + values[i - 1]
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
    return dp[n][capacity];
  }
  
  console.log(knapsack([1, 2, 3], [10, 15, 40], 6)); // Output: 55