/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    const wordMap = words.reduce((m, w) => {
        m[w] = m[w] + 1 || 1;
        return m;
    }, {});

    const sorted = Object.keys(wordMap).sort((a, b) => {
        const countDiff = wordMap[b] - wordMap[a];
        if (countDiff !== 0) {
            return countDiff;
        } else {
            return a.localeCompare(b);
        }
    });

    return sorted.slice(0, k)
};


// @lc code=end

console.log(topKFrequent(
    ["rmrypv", "zgsedk", "jlmetsplg", "wnfbo", "hnnftqf", "bxlr", "sviavwoxss", "jdbgvc", "zddeno", "rxgw", "hnnftqf", "hdmvplne", "rlmdt", "jlmetsplg", "ous", "rmrypv", "fwxulnpit", "dmhuq", "rxgw", "ledleb", "bxlr", "indbvb", "ckqqibnx", "cub", "ijww", "ehd", "hfhlfqzkcn", "sviavwoxss", "rxgw", "bxjxpfp", "mgqj", "oic", "ptk", "fwxulnpit", "ijww", "sviavwoxss", "bgfvfa", "zfkgsudxq", "alkq", "dmhuq", "zddeno", "rxgw", "zgsedk", "amarxpg", "bgfvfa", "wnfbo", "sviavwoxss", "sviavwoxss", "alkq", "nmclxk", "zgsedk", "bwowfvira", "ous", "bxlr", "zddeno", "rxgw", "ous", "wnfbo", "rmrypv", "sviavwoxss", "ehd", "zgsedk", "jlmetsplg", "abxvhyehv", "ledleb", "wnfbo", "bgfvfa", "bwowfvira", "amarxpg", "wnfbo", "bwowfvira", "dmhuq", "ouy", "bxlr", "rxgw", "oic", "hnnftqf", "ledleb", "rlmdt", "oldainprua", "ous", "ckqqibnx", "dmhuq", "hnnftqf", "oic", "jlmetsplg", "ppn", "amarxpg", "jlgfgwb", "bxlr", "bwowfvira", "hdmvplne", "oic", "ledleb", "bwowfvira", "oic", "ptk", "dmhuq", "abxvhyehv", "ckqqibnx", "indbvb", "ypzfk", "rmrypv", "bxjxpfp", "amarxpg", "dmhuq", "sviavwoxss", "bwowfvira", "zfkgsudxq", "wnfbo", "rxgw", "jxkvrmajri", "cub", "abxvhyehv", "bwowfvira", "indbvb", "ehd", "ckqqibnx", "oic", "ptk", "hnnftqf", "ouy", "oic", "zgsedk", "abxvhyehv", "ypzfk", "ptk", "sviavwoxss", "rmrypv", "oic", "ous", "abxvhyehv", "hnnftqf", "hfhlfqzkcn", "ledleb", "cub", "ppn", "zddeno", "indbvb", "oic", "jlmetsplg", "ouy", "bwowfvira", "bklij", "gucayxp", "zfkgsudxq", "hfhlfqzkcn", "zddeno", "ledleb", "zfkgsudxq", "hnnftqf", "bgfvfa", "jlmetsplg", "indbvb", "ehd", "wnfbo", "hnnftqf", "rlmdt", "bxlr", "indbvb", "jdbgvc", "jlmetsplg", "cub", "jlgfgwb", "ypzfk", "indbvb", "dmhuq", "jlmetsplg", "zgsedk", "rmrypv", "cub", "rxgw", "ledleb", "rxgw", "sviavwoxss", "ckqqibnx", "hdmvplne", "dmhuq", "wnfbo", "jlmetsplg", "bxlr", "zfkgsudxq", "bxjxpfp", "ledleb", "indbvb", "ckqqibnx", "ous", "ckqqibnx", "cub", "ous", "abxvhyehv", "bxlr", "hfhlfqzkcn", "hfhlfqzkcn", "oic", "ten", "amarxpg", "indbvb", "cub", "alkq", "alkq", "sviavwoxss", "indbvb", "bwowfvira", "ledleb"]
    , 41))