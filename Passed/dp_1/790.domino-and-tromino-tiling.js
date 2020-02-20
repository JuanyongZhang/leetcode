/*
 * @lc app=leetcode id=790 lang=javascript
 *
 * [790] Domino and Tromino Tiling
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var numTilings = function (N) {
    const mod = 10 ** 9 + 7;
    let dp = [...Array(N+1)].map(x=>Array(3).fill(0))
    //console.table(dp);
    dp[0][0] = 1;
    dp[1][0] = 1;
    //console.table(dp);
    for (let i = 2; i <= N; i++) {
        dp[i][0] = (dp[i - 1][0] + dp[i - 2][0] + dp[i - 1][1] + dp[i - 1][2]) % mod;
        dp[i][1] = (dp[i - 2][0] + dp[i - 1][2]) % mod;
        dp[i][2] = (dp[i - 2][0] + dp[i - 1][1]) % mod;
        //console.table(dp);
    }
    //console.table(dp);
    return dp[N][0];
};
// @lc code=end

console.log(numTilings(
    3
))

/*
Accepted
39/39 cases passed (60 ms)
Your runtime beats 68.42 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (37.4 MB)
*/