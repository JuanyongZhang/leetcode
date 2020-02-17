/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} 
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s)
        return '';
    const str = s.split('');
    const len = str.length;
    return str.reduce((pv, cv, idx) => {
        let pldm = cv;
        let rpt = 0;
        for (let cur = idx + 1; cur < len; cur++) {
            // console.log({ pv, cv, idx, cur, pldm });
            if (cur - idx - 1 === rpt
                && str[idx] === str[cur]) {
                rpt++;
                pldm += str[cur];
            } else if (str[2 * idx - cur + rpt] === str[cur]) {
                pldm = str[2 * idx - cur + rpt] + pldm + str[cur];
            } else {
                break;
            }
        }
        return pldm.length > pv.length ? pldm : pv;
    }, str[0])
};

const output = longestPalindrome('baabaaddbbd');
// const output = longestPalindrome('baabaaddbbd');

console.log(output);
// @lc code=end
/*

Accepted
103/103 cases passed (116 ms)
Your runtime beats 58.34 % of javascript submissions
Your memory usage beats 26.09 % of javascript submissions (42 MB)
*/
