/*
 * @lc app=leetcode id=887 lang=javascript
 *
 * [887] Super Egg Drop
 */

// @lc code=start
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */



var superEggDrop = function (K, N) {
    if (N === 1) return 1;
    let times = N;
    for (let i = 0; i < K - 1; i++) {
        times = times / 2;
        if (times < 2) {
            times = 2;
            break;
        }
    }
    return Math.ceil(times);
};

// 1, 2, 3, 4, 5, 6
// @lc code=end

console.log(superEggDrop(1, 2));
console.log(superEggDrop(2, 6));
console.log(superEggDrop(3, 14));
console.log(superEggDrop(2, 2));


