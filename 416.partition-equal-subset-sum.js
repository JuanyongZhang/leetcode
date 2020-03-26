/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((p, v) => p += v, 0);
    if (sum % 2 !== 0) return false;
    const dp = Array(sum);
    dp[0] = 1;
    for (const num of nums) {
        for (let i = sum; i >= 0; i--) {
            if (dp[i]) dp[i + num] = 1;
        }
        console.log(dp.join(','))
        if (dp[sum / 2]) return true;
    };
    return false;
}
// @lc code=end

console.log(canPartition(
    [1, 5, 11, 5]
))
console.log(canPartition(
    [1, 2, 3, 5]
))