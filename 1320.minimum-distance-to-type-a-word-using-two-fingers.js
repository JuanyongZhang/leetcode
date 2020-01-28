/*
 * @lc app=leetcode id=1320 lang=javascript
 *
 * [1320] Minimum Distance to Type a Word Using Two Fingers
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */


var minimumDistance = function (word) {
    const codes = word.split('').map((c) => c.charCodeAt(0) - 'A'.charCodeAt(0));
    const k = 26;
    const len = word.length;
    const mem = {
        A_0_27_27:0
    }

    const distance = (a, b) => {
        if (a === k || a === b) return 0;
        return Math.abs(Math.floor(a / 6) - Math.floor(b / 6))
            + Math.abs(a % 6 - b % 6);
    }

    const dp = (i, l, r) => {
        if (i === len)
            return 0;
        const cached = mem[`A_${i}_${l}_${r}`];
        if (!!cached) {
            return cached;
        }
        const c = codes[i];
        const lDis = dp(i + 1, c, r) + distance(l, c);
        const rDis = dp(i + 1, l, c) + distance(r, c);
        // mem.push({ key: `${i}_${c}_${r}`, value: lDis });
        // mem.push({ key: `${i}_${l}_${c}`, value: rDis });
        mem[`A_${i}_${c}_${r}`]=lDis;
        mem[`A_${i}_${l}_${c}`]=rDis;
        
        return Math.min(lDis, rDis);
    }
    return dp(0, k, k);
};
// @lc code=end

console.log(minimumDistance(
    "HAPPY"
))
