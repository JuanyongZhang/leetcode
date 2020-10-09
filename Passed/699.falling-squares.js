/*
 * @lc app=leetcode id=699 lang=javascript
 *
 * [699] Falling Squares
 */

// @lc code=start
/**
 * @param {number[][]} positions
 * @return {number[]}
 */

var fallingSquaresFailed = function (positions) {
    const m = new Map();
    const max = Array(positions.length).fill(0);
    // positions = positions.sort((a, b) => a[1] - b[2]);
    let curr = 0;
    for (let i = 0; i < positions.length; i++) {
        const [offset, width] = positions[i];
        m.set(offset, (m.get(offset) || 0) + width);
        m.set(offset + width, (m.get(offset + width) || 0) - width);
        const keys = [...m.keys()].sort((a, b) => a - b);
        for (const key of keys) {
            curr += m.get(key);
            max[i] = Math.max(max[i], curr);
        }
        console.log({ offset, width, max: max[i] });
    }
    return max;

};
var fallingSquares = function (cubes) {
    const stack = [];
    const max = Array(cubes.length).fill(0);
    cubes = cubes.map(([a, b]) => [a, a + b, b]);
    stack.push(cubes[0]);
    max[0] = cubes[0][2];
    for (let i = 1; i < cubes.length; i++) {
        const [l, r, h] = cubes[i];
        const maxInRange = Math.max(0, ...stack.filter(([l2, r2, h2]) => {
            // console.log({ l, r, h });
            // console.log({ l2, r2, h2 });
            // console.log({ overlap: !(l >= r2 || r <= l2) });
            return !(l >= r2 || r <= l2);
        }).map(it => it[2]));
        stack.push([l, r, maxInRange ? maxInRange + h : h]);
        max[i] = Math.max(0, ...stack.map(it => it[2]));
        // console.log({ maxInRange, max: max[i] });
        // console.table(stack);
    }
    // console.table(cubes);
    return max;

};
// @lc code=end
/*
            [l, r]
                 [l2,r2]
*/

console.log(fallingSquares([[6, 1], [9, 2], [2, 4]]));
// console.log(fallingSquares([[100, 100], [200, 100]]));
// console.log(fallingSquares([[1, 2], [2, 3], [6, 1]]));
// console.log(fallingSquares([[9, 7], [1, 9], [3, 1]]));

/*
Accepted
44/44 cases passed (256 ms)
Your runtime beats 33.33 % of javascript submissions
Your memory usage beats 33.33 % of javascript submissions (47.2 MB)
*/