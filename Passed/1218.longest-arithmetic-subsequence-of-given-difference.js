/*
 * @lc app=leetcode id=1218 lang=javascript
 *
 * [1218] Longest Arithmetic Subsequence of Given Difference
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequenceDumb = function (arr, d) {
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let val = arr[i];
        let tmp = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === val + d) {
                val = arr[j];
                tmp++;
            }
        }
        max = Math.max(tmp, max);
    }
    return max;
};

var longestSubsequence = function (arr, d) {
    let max = 0;
    let memo = new Map();
    for (const num of arr) {
        memo.set(num, (memo.get(num - d) || 0) + 1)
        max = Math.max(max, memo.get(num));//Max len at num
    }
    return max;
};


// @lc code=end

console.log(longestSubsequence(
    [1, 5, 7, 8, 5, 3, 4, 2, 1], -2
))

/*
Accepted
38/38 cases passed (108 ms)
Your runtime beats 100 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (48 MB)
*/