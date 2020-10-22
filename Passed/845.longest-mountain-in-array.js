/*
 * @lc app=leetcode id=845 lang=javascript
 *
 * [845] Longest Mountain in Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountainTLE = function (A) {
    if (A.length < 3) return 0;

    const isMountain = (arr) => {
        let left = false;
        let top = false;
        let right = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) top = true;
            if (!top && arr[i - 1] > arr[i]) return false;
            if (top && arr[i - 1] < arr[i]) return false;
            if (arr[i - 1] < arr[i]) left = true;
            if (arr[i - 1] > arr[i]) right = true;
        }
        return left && top && right;
    }
    let max = 0;
    for (let i = 0; i < A.length - 3; i++) {
        for (let j = i + Math.max(3, max); j <= A.length; j++) {
            const sub = A.slice(i, j);
            const isM = isMountain(sub);
            // console.log({ isM, max, sub }, j - i)
            if (isM) {
                max = Math.max(max, j - i);
            }
        }
    }
    return max;
};


var longestMountain = function (A) {
    const lt = Array(A.length).fill(0);
    const rt = Array(A.length).fill(0);
    // for (let i = 1; i < A.length; i++) {
    //     lt[i] = A[i - 1] < A[i] ? lt[i - 1] + 1 : 0;
    // }
    for (let i = A.length - 2; i >= 0; i--) {
        rt[i] = A[i] > A[i + 1] ? rt[i + 1] + 1 : 0;
    }
    let max = 0;
    for (let i = 0; i < A.length; i++) {
        lt[i] = A[i - 1] < A[i] ? lt[i - 1] + 1 : 0;
        const asc = lt[i];
        const desc = rt[i];
        if (asc > 0 && desc > 0) max = Math.max(max, asc + desc + 1);
    }
    console.log({ in: A });
    console.log({ lt });
    console.log({ rt });

    return max;
};
// @lc code=end
console.log(longestMountain(
    [2,1,4,7,3,2,5]
))
// console.log(longestMountain(
//     [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]
// ))
// console.log(longestMountain(
//     [2, 1, 4, 7, 3, 2, 1, 5]
// ))
// console.log(longestMountain(
//     [2, 2, 2]
// ))
// console.log(longestMountain(
//     [2, 2]
// ))

/*
Accepted
72/72 cases passed (60 ms)
Your runtime beats 83.33 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (37.8 MB)
*/