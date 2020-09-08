/*
 * @lc app=leetcode id=712 lang=javascript
 *
 * [712] Minimum ASCII Delete Sum for Two Strings
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
    const a1 = s1.split('').map(c => c.charCodeAt(0)), a2 = s2.split('').map(c => c.charCodeAt(0));
    const dp = Array.from(Array(a1.length + 1), () => Array(a2.length + 1).fill(0));
    for (let i = 1; i <= a1.length; i++) {
        dp[i][0] = dp[i - 1][0] + a1[i - 1];
    }
    for (let i = 1; i <= a2.length; i++) {
        dp[0][i] = dp[0][i - 1] + a2[i - 1];
    }
    // console.table(dp);
    for (let i = 1; i <= a1.length; i++) {
        for (let j = 1; j <= a2.length; j++) {
            if (a1[i - 1] === a2[j - 1])
                dp[i][j] = dp[i - 1][j - 1];
            else
                dp[i][j] = Math.min(
                    dp[i - 1][j] + a1[i - 1],
                    dp[i][j - 1] + a2[j - 1],
                );
        }
    }
    // console.table(dp);
    return dp[a1.length][a2.length]
};
// @lc code=end

console.log(minimumDeleteSum(
    'sea', 'eat'
))
console.log(minimumDeleteSum(
    'delete', 'leet'
))
/*
Accepted
93/93 cases passed (72 ms)
Your runtime beats 100 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (41.9 MB)
*/