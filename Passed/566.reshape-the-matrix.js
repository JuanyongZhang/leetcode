/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    if (!nums || nums.length === 0)
        return nums;
    const m = nums.length;
    const n = nums[0].length;
    if (n * m !== r * c) return nums;
    const matrix = Array.from(Array(r), () => Array(c));
    let i = 0;
    nums.forEach(arr => arr.forEach(n => {
        const y = Math.floor(i / c);
        const x = i % c;
        matrix[y][x] = n;
        i++;
    }));
    return matrix;
};
// @lc code=end
console.log(matrixReshape(
    [
        [1, 2],
        [3, 4]
    ],
    1, 4,
))

/*
Accepted
56/56 cases passed (68 ms)
Your runtime beats 99.32 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (39.6 MB)
*/