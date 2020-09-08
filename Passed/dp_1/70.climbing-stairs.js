/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const memo = new Map();
    const dp = (n) => {
        if (memo.has(n)) return memo.get(n)
        // if (n <= 0) return 0;
        if (n === 1) return 1;
        if (n === 2) return 2;
        memo.set(n, dp(n - 1) + dp(n - 2));
        return memo.get(n);
    }

    return dp(n);
};
// @lc code=end

console.log(climbStairs(
    3
))

/*Accepted
45/45 cases passed (44 ms)
Your runtime beats 97.78 % of javascript submissions
Your memory usage beats 88 % of javascript submissions (33.8 MB)
*/