/*
 * @lc app=leetcode id=842 lang=javascript
 *
 * [842] Split Array into Fibonacci Sequence
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function (s) {
    const len = s.length;
    const nums = s.split('').map(Number);
    if (nums.every(n => n === 0)) return nums;
    // if (s.startsWith('0')) return [];
    const fibs = [];
    const dfs = (pos) => {
        if (pos >= len) {
            // console.log(fibs);
            return fibs.length >= 3;
        }
        const maxOffset = nums[pos] === 0 ? 1 : len;
        let num = 0;
        for (let i = pos; i < Math.min(pos + maxOffset, len); i++) {
            num = num * 10 + nums[i];
            if (num >= 2 ** 31 - 1) break;
            if (fibs.length >= 2) {
                const sum = fibs.slice(-2).reduce((p, c) => p += c);
                if (num > sum)
                    break;
                if (num < sum)
                    continue;
            }
            fibs.push(num);
            if (dfs(i + 1))
                return true;
            fibs.pop();
        }
        return false;
    }
    dfs(0);
    return fibs;
};
// @lc code=end


const fibs = splitIntoFibonacci(
    "539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511"
);
console.log(splitIntoFibonacci('123456579'));
const len = fibs.length;
if (len > 2) {
    for (let i = 2; i < len; i++) {
        const sum = fibs.slice(i - 2, i).reduce((p, c) => p += c);
        const cur = fibs[i];
        console.assert(false,//sum === cur,
            `[${i}]${sum === cur}\t: ${fibs[i - 2]} + ${fibs[i - 1]} = ${sum} vs ${cur}`)
    }
}

/*
Accepted
70/70 cases passed (56 ms)
Your runtime beats 87.8 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (36.4 MB)
*/