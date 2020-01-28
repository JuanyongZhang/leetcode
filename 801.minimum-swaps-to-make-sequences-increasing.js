/*
 * @lc app=leetcode id=801 lang=javascript
 *
 * [801] Minimum Swaps To Make Sequences Increasing
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function (A, B) {
    const len = A.length;
    if (len === 1)
        return 1;
    if (len === 2) {
        A[0], B[0] = B[0], A[0];
        console.dir({ A, B });
    }

};
// @lc code=end

console.log(
    minSwap(
        [5, 4],
        [3, 7]
        // [1, 3, 5, 4],
        // [1, 2, 3, 7]
    )
)

