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
        this._limit = limit;
        this._contains = 0;
    }

    fulfilled() {
        return this._contains === this._limit;
    }

    push(num) {
        if (this._contains + num > this._limit) return false;
        this._contains += num;
        return true;
    }

}
var makesquareFailed = function (nums) {
    if (!nums || nums.length < 4) return false;
    nums = nums.sort((a, b) => b - a);
    const total = nums.reduce((p, v) => p + v, 0);
    if (total % 4 !== 0) return false;
    const edge = total / 4;
    const buckets = Array.from(Array(4), () => new Bucket(edge));

    let i = 0;
    while (i < nums.length) {
        for (let j = 0; j < 4; j++) {
            const s = nums[i];
            const b = buckets[j];
            const added = b.push(s);
            console.log({ added });
            console.table(buckets);
            if (added) {
                i++;
                continue;
            }
            if (j === 3 && !added)
                return false;
        }
    }

    return true;
};

var makesquare = function (nums) {
    if (!nums || nums.length < 4) return false;
    const total = nums.reduce((p, v) => p + v, 0);
    if (total % 4 !== 0) return false;
    const edge = total / 4;
    const buildEdge = (s, n) => {
        console.log({ s, n });
        if (s.length === 0 && n === 0) return true;
        if (s.length === 0 || n === 0) return false;
        let l = 0, r = s.length - 1;
        let sum = 0;
        while (l < r) {
            sum += s[l] + s[r];
            if (sum === edge) {
                return buildEdge(s.splice(l+1, r-1), n-1);
            } else if (sum < edge) {
                r--;
            } else {
                return false;
            }
        }

    };

    return buildEdge(nums, 4);
};
// @lc code=end

console.log(makesquare([10, 6, 5, 5, 5, 3, 3, 3, 2, 2, 2, 2]));
// console.log(makesquare([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]));
// console.log(makesquare([1, 1, 2, 2, 2]));
// console.log(makesquare([3, 3, 3, 3, 4]));