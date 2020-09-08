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
    let ans = n * m;
    const tile = (h, l, cur) => {
        if (cur >= ans) return;
        console.log({ ans, cur });
        console.table(Array.from(Array(h), () => Array(l).fill(0)));
        if (h === 0 || l === 0) {
            ans = cur;
            return
        }
        if (h === 1) {
            cur += l;
            ans = cur;
            return;
        }
        if (l === 1) {
            cur += h;
            ans = cur;
            return;
        }
        if (h === l) {
            cur++
            ans = cur;
            return;
        }
        const maxLen = Math.min(h, l);
        for (let i = maxLen; i >= 2; i--) {
            h < l ?
                tile(h, l - i, cur + 1) :
                tile(h - i, l, cur + 1);
        }
    }
    tile(n, m, 0);
    return ans;
};
// @lc code=end
// console.log(tilingRectangle(
//     3, 3
// ))
// console.log(tilingRectangle(
//     2, 3
// ))
console.log(tilingRectangle(
    5, 8
))
// console.log(tilingRectangle(
//     11, 13
// ))
