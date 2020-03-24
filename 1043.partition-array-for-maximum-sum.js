/*
 * @lc app=leetcode id=1043 lang=javascript
 *
 * [1043] Partition Array for Maximum Sum
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var maxSumAfterPartitioning = function (A, K) {
    /*
    dp[i] := max sum of (A[1]~A[i])
    Init: dp[0] = 0
    Formula:
    dp[i] = Math.max(dp[i-k]+k*max(A[i-k+1~i])), 1<=k<=min(i, k)
    Ans: dp[n];
    */
    let dp = Array(A.length + 1).fill(-Infinity);
    dp[0] = 0;
    for (let i = 0; i <= A.length; i++) {
        for (let k = 1; k <= Math.min(i, K); k++) {
            const sub = A.slice(i - k, i);
            // console.log({ i, k, sub });
            const curr = dp[i - k] + k * Math.max(...sub);
            dp[i] = Math.max(dp[i], curr);
        }
        // console.log(dp.join(', '))
    }

    return dp.pop();
};
// @lc code=end

console.log(maxSumAfterPartitioning(
    [1, 15, 7, 9, 2, 5, 10], 3
))