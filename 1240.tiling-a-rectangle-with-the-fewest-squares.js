/*
 * @lc app=leetcode id=1240 lang=javascript
 *
 * [1240] Tiling a Rectangle with the Fewest Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var tilingRectangle = function (n, m) {
    const tile = (h, l) => {
        console.table(Array.from(Array(h), () => Array(l).fill(0)));
        if (h === 0 || l === 0) return 0;
        if (h === 1) return l;
        if (l === 1) return h;
        if (h === l) return 1;
        const maxLen = Math.min(h, l);
        let ans = 0;
        for (let i = maxLen; i >= 1; i--) {
            //forumla of current one:
            ans  = ans + 1+ Math.min(tile(h, l - i), tile(h - i, l));
        }
        return ans;
    }
    return tile(n, m);
};
// @lc code=end
// console.log(tilingRectangle(
//     3, 3
// ))
console.log(tilingRectangle(
    2, 3
))
console.log(tilingRectangle(
    5, 8
))
// console.log(tilingRectangle(
//     11, 13
// ))
