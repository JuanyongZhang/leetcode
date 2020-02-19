/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const len = nums.length;
    const memo = new Map();
    const dp = (n) => {
        if (memo.has(n)) return memo.get(n);
        if (n < 0) return 0;
        memo.set(n, Math.max(dp(n - 2) + nums[n], dp(n - 1)));
        return memo.get(n);
    }
    return dp(len - 1);
};
// @lc code=end

console.log(rob(
    [2, 7, 9, 3, 1]
))

/*
Accepted
69/69 cases passed (44 ms)
Your runtime beats 97.9 % of javascript submissions
Your memory usage beats 76.19 % of javascript submissions (33.8 MB)
*/