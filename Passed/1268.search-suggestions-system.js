/*
 * @lc app=leetcode id=1268 lang=javascript
 *
 * [1268] Search Suggestions System
 */

// @lc code=start
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    const dict = [...new Set([...products])].sort();
    // console.log(dict);
    const ans = [];
    const typeSearchWord = (kw) => {
        let l = 0;
        let r = dict.length - 1;
        while (l < r) {
            let m = l + Math.floor((r - l) / 2);
            const curr = dict[m].substring(0, kw.length);
            // console.log({ curr, r, m, l });
            if (kw <= curr)
                r = m;
            else
                l = m + 1;
        }
        const res = [];
        for (let i = l; i < Math.min(l + 3, dict.length); i++) {
            if (dict[i].indexOf(kw) > -1)
                res.push(dict[i]);
            else
                break;
        }
        return res;
    };

    for (let i = 1; i <= searchWord.length; i++) {
        ans.push(typeSearchWord(searchWord.substring(0, i)));
    }

    return ans;
};
// @lc code=end

console.log(suggestedProducts(
    ["mobile", "mobile", "abc", "mouse", "moneypot", "monitor", "mousepad"],
    "mouse"
));

/*
Accepted
41/41 cases passed (124 ms)
Your runtime beats 82.66 % of javascript submissions
Your memory usage beats 35.43 % of javascript submissions (50.8 MB)
*/