/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 * 
 * abcabcbb ->
 * {
 * a:[0,3],
 * b:[1,4,6,7],
 * c:[2,5]
 * }
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    const map = {};
    let left = 0;
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);

};

const output = lengthOfLongestSubstring('abcabcbb');
console.log(output);

// @lc code=end

