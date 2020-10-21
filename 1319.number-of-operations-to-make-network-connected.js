/*
 * @lc app=leetcode id=1319 lang=javascript
 *
 * [1319] Number of Operations to Make Network Connected
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
    if (connections.length < n - 1) return -1;
    const p = Array(n).fill(0);

    const findP = (x) => {
        if (p[x] === x) return x;
        p[x] = findP(p[x]);
        return p[x];
    };

    for (const [a, b] of connections) {
        p[findP(a)] = findP(b);
    }
    console.table(p);
    const s = new Set();
    for (let i = 0; i < n; i++) {
        s.add(findP[i]);
    }
    
    return s.size - 1;
};
// @lc code=end

console.log(makeConnected(4,
    [
        [0, 1],
        [0, 2],
        [1, 2]
    ]));

console.log(makeConnected(6,
    [
        [0, 1], [0, 2], [0, 3], [1, 2], [1, 3]
    ]));