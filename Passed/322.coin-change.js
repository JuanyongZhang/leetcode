/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (const c of coins) {
        if (c <= amount) {
            dp[c] = 1;
        }
    }
    for (let i = 1; i <= amount; i++) {
        for (let c of coins.filter(a => a <= i)) {
            dp[i] = Math.min(dp[i - c] + 1, dp[i]);
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
}
// @lc code=end
console.log(coinChange([2, 5, 7, 10], 14));
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 1));

/*
Accepted
182/182 cases passed (152 ms)
Your runtime beats 38.74 % of javascript submissions
Your memory usage beats 5.4 % of javascript submissions (45.2 MB)
*/