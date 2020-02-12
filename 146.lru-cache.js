/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start

class LRUCache {

    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.store = new Map();
    }
    /** 
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const val = this.store.get(key);
        if (!val)
            return -1;
        this.store.delete(key);
        this.put(key, val);
        return val;
    };

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        //remove duplicates
        this.store.set(key, value);
        this.store.delete(key);
        this.store = new Map([[key, value], ...this.store.entries()].slice(0, this.capacity));
        // console.dir(this.store);
    };
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
const cache = new LRUCache(2);
const output = [
    cache.get(2),
    cache.put(2, 6),
    cache.get(1),
    cache.put(1, 5),
    cache.put(1, 2),
    cache.get(1),
    cache.get(2),
];

console.log({ output })


/**
Time Limit Exceeded
16/18 cases passed (N/A)
Testcase
 */