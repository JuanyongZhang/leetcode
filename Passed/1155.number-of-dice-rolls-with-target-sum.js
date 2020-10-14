/*
 * @lc app=leetcode id=1155 lang=javascript
 *
 * [1155] Number of Dice Rolls With Target Sum
 */

// @lc code=start
/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (d, f, t) {
    const mod = 10 ** 9 + 7;
    const memo = new Map();
    const roll = (times, target) => {
        if (times === 0)
            return target === 0 ? 1 : 0;
        const min = times;
        const max = times * f;
        if (target > max || target < min) return 0;

        const key = `${times}_${target}`;
        if (memo.has(key)) return memo.get(key);
        let ans = 0;
        for (let n = 1; n <= f; n++) {
            ans = (ans + roll(times - 1, target - n)) % mod;
            memo.set(key, ans);
        }
        return ans;
    }
    return roll(d, t);
};
var numRollsToTarget = function (dices, faces, target) {
    const mod = 10 ** 9 + 7;
    const dp = Array.from(Array(dices + 1), () => Array(target + 1).fill(0));
    dp[0][0] = 1;
    for (let d = 1; d <= dices; d++) {
        for (let n = 1; n <= faces; n++) {
            for (let t = n; t <= target; t++) {
                dp[d][t] = (dp[d][t] + dp[d - 1][t - n]) % mod;
            }
        }
    }
    return dp[dices][target];
};
// @lc code=end

console.log(numRollsToTarget(
    30, 30, 500
))
console.log(numRollsToTarget(
    2, 5, 10
))
console.log(numRollsToTarget(
    1, 6, 3
))
console.log(numRollsToTarget(
    2, 6, 7
))
/*
Accepted
65/65 cases passed (84 ms)
Your runtime beats 73.37 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (41.8 MB)

Accepted
65/65 cases passed (76 ms)
Your runtime beats 89.94 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (37.1 MB)
*/