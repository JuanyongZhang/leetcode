/*
 * @lc app=leetcode id=926 lang=javascript
 *
 * [926] Flip String to Monotone Increasing
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function (S) {
    const len = S.length;
    const chars = S.split('');
    const dp = Array.from(Array(len), () => Array(2).fill(0));
    dp.unshift([0, 1]);
    // console.table(dp);
    for (let i = 1; i <= len; i++) {
        if (chars[i-1] === '0') {
            dp[i][0] = dp[i - 1][0];
            dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + 1;
        } else {
            dp[i][0] = dp[i - 1][0] + 1;
            dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]);
        }
    }
    return Math.min(dp[len][0], dp[len][1]);
};
// @lc code=end

console.log(minFlipsMonoIncr(
    "00110"
));
console.log(minFlipsMonoIncr(
    "010110"
));
console.log(minFlipsMonoIncr(
    "00011000"
));
console.log(minFlipsMonoIncr(
    "100000001010000"
));

/*
Accepted
81/81 cases passed (72 ms)
Your runtime beats 10.53 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (42.3 MB)
*/