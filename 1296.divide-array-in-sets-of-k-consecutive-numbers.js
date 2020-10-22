/*
 * @lc app=leetcode id=1296 lang=javascript
 *
 * [1296] Divide Array in Sets of K Consecutive Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
class Bucket {
    constructor(limit) {
        this.limit = limit;
        this.arr = [];
    }

    isFull() {
        return this.limit <= this.arr.length;
    }

    push(it) {
        if (this.isFull()) return false;
        this.arr.push(it);
        return true;
    }
}

class Buckets {

    constructor(s, n) {
        this.s = s;
        this.n = n;
        this.lit = null;
        this.lIdx = 0;
        this.bkts = Array.from(Array(Math.floor(s / n)), () => new Bucket(n));
    }

    push(it) {
        let i = this.bkts.findIndex(b => !b.isFull());
        if (this.lit === it) i++;
        console.log(`Push [${it}] to Buckets[${i}]`);
        const bkt = this.bkts[i];
        bkt.push(it);
        this.lit = it;
        this.lIdx = i;
        // console.log({ ...this });
    }

    fulfilled() {
        return !this.bkts.find(it => !it.isFull());
    }
}

var isPossibleDivide = function (nums, k) {
    if (nums.length % k !== 0) return false;
    nums.sort((a, b) => a - b);
    const m = new Map();
    // const buckets = Array(nums / k).fill([]);


    for (let i = 0; i < nums.length; i++) {
        const k = nums[i];
        m.set(k, (m.get(k) || 0) + 1);
    }
    console.table(m);
    const keys = [...m.keys()];
    for (let i = 0; i < nums.length / k; i++) {
        for (let j = 0; j < k; j++) {
            const cur = j % k;
            const key = keys[j];
            if (cur > 0 && key !== keys[j - 1] + 1) {
                return false;
            }
            if (m.get(key) === 1) {
                m.delete(key);
            } else {
                m.set(key, m.get(key) - 1);
            }
        }
    }
    console.table(m);

    return m.size === 0;
};
// @lc code=end
console.log(isPossibleDivide([1, 2, 3, 3, 4, 4, 5, 6], 4));
console.log(isPossibleDivide([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3));
console.log(isPossibleDivide([3, 3, 2, 2, 1, 1], 3));
console.log(isPossibleDivide([1, 2, 3, 4], 3));

