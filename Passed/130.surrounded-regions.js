/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    if (board.length === 0) return;
    // const a = board.flatMap(k => k);
    // if (!a.find(k => k === 'O') || !a.find(k => k === 'X')) return;
    const n = board.length, m = board[0].length;
    const dfs = (y, x) => {
        if (y >= n || y < 0 || x >= m || x < 0 || board[y][x] !== 'O') return;
        board[y][x] = 'G';
        dfs(y + 1, x);
        dfs(y - 1, x);
        dfs(y, x + 1);
        dfs(y, x - 1);
    };

    for (let i = 0; i < n; i++) {
        dfs(i, 0);
        dfs(i, m - 1);
    }
    for (let i = 0; i < m; i++) {
        dfs(0, i);
        dfs(n - 1, i);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            board[i][j] = board[i][j] === 'G' ? 'O' : 'X';
        }
    }

};
// @lc code=end

let input = [["O", "O"], ["O", "O"]];
solve(input);
console.log(input);

/*
Accepted
59/59 cases passed (96 ms)
Your runtime beats 82.7 % of javascript submissions
Your memory usage beats 5.54 % of javascript submissions (42 MB)
*/