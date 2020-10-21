/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands2 = function (grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) return 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const reverseMarkConnected = (x, y) => {
        if (x >= rows || y >= cols
            || x < 0 || y < 0
            || grid[x][y] === '0') return;
        //mark 1 to 0;
        grid[x][y] = '0';
        reverseMarkConnected(x - 1, y);
        reverseMarkConnected(x + 1, y);
        reverseMarkConnected(x, y - 1);
        reverseMarkConnected(x, y + 1);
    }

    let count = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                reverseMarkConnected(r, c);
            }
        }
    }
    return count;
};

const numIslands = (grid) => {
    if (grid.length === 0) return 0;
    const n = grid.length;
    const m = grid[0].length;
    let ans = 0;
    const dfs = (y, x) => {
        if (y >= n || x >= m || y < 0 || x < 0 || grid[y][x] === '0')
            return;
        grid[y][x] = '0';
        dfs(y + 1, x);
        dfs(y - 1, x);
        dfs(y, x + 1);
        dfs(y, x - 1);
    };
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (grid[y][x] === '1') {
                ans++;
                dfs(y, x);
            }
        }
    }
    return ans;
};

// @lc code=end
console.assert(1 === numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
]), 'Wrong Answer!!')
console.assert(3 === numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
]), 'Wrong Answer!!')

/*
Accepted
47/47 cases passed (60 ms)
Your runtime beats 92.03 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (37.3 MB)
 */