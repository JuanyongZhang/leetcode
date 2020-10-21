/*
 * @lc app=leetcode id=827 lang=javascript
 *
 * [827] Making A Large Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
    if (grid.length === 0) return 0;
    const n = grid.length, m = grid[0].length;
    
    let max = 0;
    const dfs = (y, x, s) => {
        // console.log({ y, x, s });
        if (y >= n || y < 0 || x >= m || x < 0 || grid[y][x] === 0) return s;
        grid[y][x] = 0;
        s++;
        s = Math.max(dfs(y + 1, x, s), s);
        s = Math.max(dfs(y - 1, x, s), s);
        s = Math.max(dfs(y, x + 1, s), s);
        s = Math.max(dfs(y, x - 1, s), s);
        return s;
    };

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (grid[y][x] === 0) {
                grid[y][x] = 1;
                const size = dfs(y, x, 0);
                max = Math.max(max, size);
            }
        }
    }
    console.table(grid);
    return max;
};
// @lc code=end

console.log(largestIsland([
    [1,0,1,1,1,1],
    [1,0,1,0,0,0],
    [1,1.0,1,1,1],
    [1,0,1,0,0,0],
    [0,1,1,1,1,1],
]));