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
var numIslands = function (grid) {
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
                reverseMarkConnected(r, c)
            }
        }
    }
    return count;
};
// @lc code=end
console.log(numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
]))

/*
Accepted
47/47 cases passed (60 ms)
Your runtime beats 92.03 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (37.3 MB)
 */