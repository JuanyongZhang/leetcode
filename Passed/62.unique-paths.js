/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function (m, n) {
    const memo = new Map();
    const dfs = (x, y) => {
        const key = `${x}_${y}`
        if (memo.has(key)) {
            return memo.get(key);
        }
        if (x < 1 || y < 1) return 0;
        if (x === 1 && y === 1) return 1;
        memo.set(key, dfs(x - 1, y) + dfs(x, y - 1))
        return memo.get(key);
    }
    return dfs(m, n);
};

const uniquePaths = function (m, n) {
    //formula dp[x][y]=dp[x-1][y]+dp[x][y-1];
    const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(1));
    console.table(dp)
    for (let y = 2; y < n + 1; y++) {
        for (let x = 2; x < m + 1; x++) {
            dp[y][x] = dp[y - 1][x] + dp[y][x - 1];
            // console.table(dp)
        }
    }
    return dp[n][m];
}
// @lc code=end

console.log(uniquePaths(
    7, 3
))

/*
Accepted
62/62 cases passed (60 ms)
Your runtime beats 48.58 % of javascript submissions
Your memory usage beats 9.09 % of javascript submissions (35.7 MB)

*/