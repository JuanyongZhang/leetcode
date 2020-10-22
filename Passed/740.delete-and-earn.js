/*
 * @lc app=leetcode id=740 lang=javascript
 *
 * [740] Delete and Earn
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    const buff = Array(20000).fill(0);
    let len = 0;
    for (const num of nums) {
        buff[num] += num;
        len = Math.max(len, num);
    }
    console.table(buff);
    const memo = new Map();
    const dp = n => {
        if (memo.has(n)) return memo.get(n);
        if (n < 0) return 0;
        memo.set(n, Math.max(dp(n - 2) + buff[n], dp(n - 1)));
        return memo.get(n);
    }
    return dp(len);
};
// @lc code=end

console.log(deleteAndEarn(
    [3, 4, 2]
));
console.log(deleteAndEarn(
    [2, 2, 3, 3, 3, 9]
));

/*
Accepted
46/46 cases passed (60 ms)
Your runtime beats 67.5 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (37 MB)
*/