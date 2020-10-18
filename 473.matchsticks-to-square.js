/*
 * @lc app=leetcode id=473 lang=javascript
 *
 * [473] Matchsticks to Square
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

class Bucket {
    constructor(limit) {
        this.limit = limit;
        this._contains = 0;
    }

    push(num) {
        if (this._contains + num > this.limit) return false;
        this._contains += num;
        return true;
    }

}
var makesquare = function (nums) {
    const total = nums.reduce((p, v) => p + v, 0);
    if (total % 4 !== 0) return false;
    const edgeLen = total / 4;
    const buckets = Array(4).fill(new Bucket(edgeLen));
for()


    console.log({ buckets, edgeLen });
    return true;
};
// @lc code=end

console.log(makesquare([1, 1, 2, 2, 2]));
console.log(makesquare([3, 3, 3, 3, 4]));