/*
 * @lc app=leetcode id=1312 lang=javascript
 *
 * [1312] Minimum Insertion Steps to Make a String Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
    if (!s || s.length === 1)
        return 0
    const str = s.split('');
    const mem = {};
    const dp = (lt, rt) => {
        if (lt >= rt) {
            return 0
        }
        const k = `K_${lt}_${rt}`;
        if (!!mem[k])
            return mem[k];
        if (str[lt] === str[rt])
            return dp(lt + 1, rt - 1);
        const lIns = dp(lt + 1, rt);
        const rIns = dp(lt, rt - 1);
        const res = Math.min(lIns, rIns) + 1;
        mem[k] = res;
        return res;
    }
    return dp(0, str.length - 1)
};
// @lc code=end
console.log(minInsertions(
    "tldjbqjdogipebqsohdypcxjqkrqltpgviqtqz"
))
