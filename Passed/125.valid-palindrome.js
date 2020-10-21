/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const _clean = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '');
    const _isPalindrome = (str, l, r) => {
        const chars = str.split('');
        while (l <= r) {
            if (chars[l++] !== chars[r--])
                return false;
        }
        return true;
    };
    const alphabets = _clean(s);
    // console.log({ alphabets });
    return _isPalindrome(alphabets, 0, alphabets.length - 1);
};
// @lc code=end

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
/*
Accepted
481/481 cases passed (100 ms)
Your runtime beats 43.19 % of javascript submissions
Your memory usage beats 6.79 % of javascript submissions (41 MB)
*/