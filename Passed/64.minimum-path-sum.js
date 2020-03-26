/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum2 = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array.from(Array(m), () => Array(n).fill(0));
    dp[0][0] = grid[0][0];
    for (let i = 1; i < m; i++) {
        dp[i][0] = grid[i][0] + dp[i - 1][0];
    }
    for (let j = 1; j < n; j++) {
        dp[0][j] = grid[0][j] + dp[0][j - 1];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = grid[i][j] + Math.min(
                dp[i][j - 1],
                dp[i - 1][j],
            )
        }
    }
    return dp[m - 1][n - 1];
};

var minPathSum = function (grid) {
    const m = grid.length;
    if (m === 0) return 0;
    const n = grid[0].length;
    const memo = Array.from(Array(m), () => Array.from(n));
    const minSum = (row, col) => {
        if (row < 0 || col < 0) return Infinity;
        if (row === 0 && col === 0) return grid[0][0];
        if (!!memo[row][col]) return memo[row][col];
        memo[row][col] = grid[row][col] + Math.min(
            minSum(row - 1, col),
            minSum(row, col - 1)
        )
        return memo[row][col];
    }
    return minSum(m - 1, n - 1);
};
// @lc code=end
console.log(minPathSum(
    [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]
))

/*
Accepted
61/61 cases passed (64 ms)
Your runtime beats 47.59 % of javascript submissions
Your memory usage beats 66.67 % of javascript submissions (35.9 MB)

Accepted
61/61 cases passed (60 ms)
Your runtime beats 70.76 % of javascript submissions
Your memory usage beats 66.67 % of javascript submissions (36.8 MB)
*/