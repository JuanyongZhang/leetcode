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
var uniquePaths = function (m, n) {
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