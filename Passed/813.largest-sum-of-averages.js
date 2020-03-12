/*
 * @lc app=leetcode id=813 lang=javascript
 *
 * [813] Largest Sum of Averages
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function (A, K) {
    let N = A.length;
    const sums = [A[0]];
    const dp = Array.from(Array(K), () => Array(N).fill(0));
    dp[0][0] = A[0];
    for (let i = 1; i < N; i++) {
        sums[i] = A[i] + sums[i - 1];
        dp[0][i] = sums[i] / (i + 1);
    }

    for (let k = 1; k < K; k++) {
        for (let n = 1; n < N; n++) {
            for (let j = k - 1; j < n; j++) {
                dp[k][n] = Math.max(
                    dp[k][n],
                    dp[k - 1][j] + (sums[n] - sums[j]) / (n - j)
                );
                console.log({ k, n, j });
                console.log({ sums });
                console.table(dp);
            }
        }
    }
    console.log({ sums });
    console.table(dp);
    return dp[K - 1][N - 1];
};


// @lc code=end
console.table(largestSumOfAverages(
    [9, 1, 2, 3, 9], 3
))
/*
Accepted
51/51 cases passed (52 ms)
Your runtime beats 96.77 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (36 MB)
*/