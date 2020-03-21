/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {

    const inDict = (word) => {
        return wordDict.includes(word) ? word : undefined;
    }
    const wb = (word) => {
        let ans = [];
        if (inDict(word)) ans.push(word);
        for (let i = 0; i < word.length; i++) {
            const l = word.substring(0, i);
            const r = word.substring(i);
            const d = inDict(r);
            if (!!d) {
                const l_ans = [wb(l) + ' ' + d];
                console.log(wb(l), d);
                ans = ans.concat(l_ans);
            }
            // console.log({ l, r })
        }
        return ans;
    }

    return wb(s);
};
// @lc code=end

console.log(wordBreak(
    'catsanddog', ["cat", "cats", "and", "sand", "dog"]
))
console.log(wordBreak(
    'pineapplepenapple', ["apple", "pen", "applepen", "pine", "pineapple"]
))
console.log(wordBreak(
    'catsandog', ["cats", "dog", "sand", "and", "cat"]
))