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
    const keep = Array(len - 1).fill(Infinity);
    const swap = Array(len - 1).fill(Infinity);
    keep.unshift(0);
    swap.unshift(1);
    for (let i = 1; i < len; i++) {
        if (A[i] > A[i - 1] && B[i] > B[i - 1]) {
            keep[i] = keep[i - 1]; //no swap for i and i-1
            swap[i] = swap[i - 1] + 1; //swap for both i and i-1
        }
        if (A[i] > B[i - 1] && B[i] > A[i - 1]) {
            //swap
            swap[i] = Math.min(swap[i], keep[i - 1] + 1);//swap i
            keep[i] = Math.min(keep[i], swap[i - 1]); //swap i-1
        }
    }
    return Math.min(swap[len - 1], keep[len - 1]);
};
// @lc code=end
console.table([
    [1, 3, 5, 4],
    [1, 2, 3, 7],
])

console.log(
    minSwap(
        [1, 3, 5, 4],
        [1, 2, 3, 7]
    )
)
/*
Accepted
102/102 cases passed (60 ms)
Your runtime beats 65.49 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (36.9 MB)
*/
