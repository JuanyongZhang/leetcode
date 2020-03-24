/*
 * @lc app=leetcode id=818 lang=javascript
 *
 * [818] Race Car
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
var racecar = function (t) {
    const dp = Array.from(Array(t), () => Array(2).fill(Infinity));
    dp[0][1] = 1;
    console.table(dp);
    for (let i = 1; i < t; i++) {
        
    }
    return Math.min(dp[t - 1][0], dp[t - 1][1])
};
// @lc code=end
console.log(racecar(
    3
))
