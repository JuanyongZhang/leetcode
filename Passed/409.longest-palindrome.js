/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const charFreq = new Map();
    for (const c of s) {
        if (charFreq.has(c))
            charFreq.delete(c);
        else
            charFreq.set(c, 1);
    }
    return s.length - (charFreq.size === 0 ? 0 : charFreq.size - 1);
};
// @lc code=end

console.log(longestPalindrome(
    'abccccdd'
))
console.log(longestPalindrome(
    'bb'
))

/*
Accepted
95/95 cases passed (68 ms)
Your runtime beats 36.54 % of javascript submissions
Your memory usage beats 20 % of javascript submissions (36.4 MB)
*/