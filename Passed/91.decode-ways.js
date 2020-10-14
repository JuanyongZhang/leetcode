/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const cache = new Map();
    const ways = (str, l, r) => {
        const key = `${str}_${l}_${r}`;
        if (cache.has(key)) return cache.get(key);
        if (str[l] === '0') return 0;
        if (l >= r) return 1;
        let ans = ways(str, l + 1, r);
        const prefix = Number.parseInt(`${str[l] + str[l + 1]}`);
        if (prefix <= 26)
            ans += ways(str, l + 2, r);
        cache.set(key, ans);
        return ans;
    };

    return ways(s.split(''), 0, s.length - 1);
};
// @lc code=end
console.log(numDecodings('226'));
console.log(numDecodings('12'));
console.log(numDecodings('0'));
console.log(numDecodings('1'));

/*
Accepted
268/268 cases passed (96 ms)
Your runtime beats 42.17 % of javascript submissions
Your memory usage beats 7.65 % of javascript submissions (42.7 MB)
*/