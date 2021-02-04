/*
 * @lc app=leetcode id=684 lang=javascript
 *
 * [684] Redundant Connection
 */

// @lc code=start
class UnionFindSet {
    constructor(n) {
        this.ranks = Array(n + 1).fill(0);
        this.parents = Array(n + 1).fill(0);
        for (let i = 0; i < this.parents.length; i++) {
            this.parents[i] = i;
        }
        console.log('New:', { ...this });
    }

    find(a) {
        if (a !== this.parents[a])
            this.parents[a] = this.find(this.parents[a]);
        console.log('Fnd:', { ...this });
        return this.parents[a];
    }

    union(a, b) {
        const pa = this.find(a);
        const pb = this.find(b);
        if (pa === pb) return false;
        if (this.ranks[pa] > this.ranks[pb])
            this.parents[pb] = pa;
        else if (this.ranks[pa] < this.ranks[pb])
            this.parents[pa] = pb;
        else {
            this.parents[pb] = pa;
            this.ranks[pb] += 1;
        }
        console.log('Uno:', { ...this });
        return true;
    }
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    const s = new UnionFindSet(edges.length);
    for (const e of edges) {
        if (!s.union(e[0], e[1])) return e;
    }
    return {};
};
// @lc code=end
console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]]));
console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]));
