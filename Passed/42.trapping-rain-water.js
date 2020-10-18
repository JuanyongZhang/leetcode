/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (h) {
    let ans = 0;
    const len = h.length;
    const lt = Array(len).fill(-1);
    const rt = Array(len).fill(-1);
    lt[0] = h[0];
    rt[len - 1] = h[len - 1];
    for (let i = 1; i < len; i++) {
        lt[i] = Math.max(h[i], lt[i - 1]);
    }
    for (let i = len - 2; i >= 0; i--) {
        rt[i] = Math.max(h[i], rt[i + 1]);
    }
    for (let i = 0; i < len; i++) {
        ans += Math.min(rt[i], lt[i]) - h[i];
    }
    return ans;
};
// @lc code=end
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
/*
Accepted
320/320 cases passed (76 ms)
Your runtime beats 96.73 % of javascript submissions
Your memory usage beats 6.07 % of javascript submissions (40.3 MB)
*/