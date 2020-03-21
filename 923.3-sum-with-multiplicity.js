/*
 * @lc app=leetcode id=923 lang=javascript
 *
 * [923] 3Sum With Multiplicity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (A, target) {
    const counts = new Map();
    const kMod = 10 ** 9 + 7;
    for (const k of A) {
        counts.set(k, (counts.get(k) || 0) + 1);
    }
    // console.table(counts);
    let ans = 0;
    const keys = [...counts.keys()];
    const len = keys.length;
    for (let a = 0; a < len; a++) {
        for (let b = a; b < len; b++) {
            const i = keys[a], j = keys[b], k = target - i - j;
            if (!counts.has(k) || k < j) continue;
            let times = 0;
            if (i === j && j === k) {
                times = (counts.get(i) - 2) * (counts.get(i) - 1) * counts.get(i) / 6;
            } else if (i !== j && j === k) {
                times = counts.get(i) * (counts.get(j) - 1) * counts.get(j) / 2;
            } else if (i === j && j !== k) {
                times = counts.get(i) * (counts.get(i) - 1) * counts.get(k) / 2;
            } else {
                times = counts.get(i) * counts.get(j) * counts.get(k);
            }
            console.log(`(${i}, ${j}, ${k}) occurs ${times} times;`)
            ans += times;
        }
    }
    return ans % kMod;
};
// @lc code=end

// console.log(threeSumMulti(
//     [1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
//     8
// ))
// console.log(threeSumMulti(
//     [1, 1, 2, 2, 2, 2],
//     5
// ))
// console.log(threeSumMulti(
//     [1, 1, 2, 2, 2],
//     6
// ))
console.log(threeSumMulti(
    [3, 3, 1]
    , 7
))