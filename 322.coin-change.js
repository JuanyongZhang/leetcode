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

    coins = coins.sort((a, b) => b - a);
    let ans = Infinity;
    const dfs = (coins, amount, count) => {
        console.log(JSON.stringify({ coins, amount, count, ans }));
        if (coins.length === 1) {
            if (amount % coins[0] === 0)
                ans = Math.min(ans, count + Math.floor(amount / coins[0]));
        } else {
            const [coin, ...rest] = coins;
            let k = Math.floor(amount / coin) + 1;
            while (k-- >= 0) {
                dfs(rest, amount - coin * k, count + k);
            }
        }
    };

    dfs(coins, amount, 0);
    return ans === Infinity ? -1 : ans;
}

// @lc code=end
console.log({ result: coinChange([1, 2, 5], 11) });
