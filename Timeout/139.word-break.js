/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak2 = function (s, wordDict) {
    wordDict.forEach(w => {
        s = s.split(w).join('');
        if (s.length === 0) return true;
    })
    return s.length === 0;
};
var wordBreakMemo = function (s, dict) {
    const memo = new Map();
    const dp = (str) => {
        if (memo.has(str)) return memo.get(str);
        if (dict.includes(str)) {
            memo.set(str, true);
            return true;
        }
        for (let i = 0; i < str.length; i++) {
            const l = str.substring(0, i);
            const r = str.substring(i);
            if (dict.includes(r)
                && dp(l)) {
                // console.log({ l, r });
                memo.set(str, true);
                return true;
            }
        }
        return false;
    }
    return dp(s);
};


// @lc code=end

console.log(wordBreak(
    'leetcode', ['leet', 'code']
));
// console.log(wordBreak(
//     'applepenapple', ['apple', 'pen']
// ));
// console.log(wordBreak(
//     'catsandog', ['cats', 'dog', 'sand', 'and', 'cat']
// ));
// console.log(wordBreak(
//     'cars', ['car', 'ca', 'rs']
// ));

// console.log(wordBreak(
//     'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//     ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa']
// ));

/*

Time Limit Exceeded
31/36 cases passed (N/A)
Testcase

 */