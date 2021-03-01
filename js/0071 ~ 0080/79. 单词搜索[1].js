/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 这题一定要注重剪枝！！剪枝！！
// 而且不要用对象充当vis，比如obj[i + '' + j]，否则会超时

// 向量
let dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];

let exist = function (board, word) {
    let m = board.length, n = board[0].length, res = false;
    let vis = new Array(m);
    for (let i = 0; i < m; ++i) {
        vis[i] = new Array(n).fill(false);
    }

    if (word.length > m * n) return false;

    let dfs = (i, j, idx) => {
        if (idx === word.length) {
            res = true;
            return;
        }

        if (i < 0 || i >= m || j < 0 || j >= n || vis[i][j] || board[i][j] !== word[idx]) return;

        vis[i][j] = true;
        for (let k = 0; k < 4; k++) {
            dfs(i + dx[k], j + dy[k], idx + 1);
            if (res) break; // 剪枝
        }
        // 还原现场
        vis[i][j] = false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, 0);
            if (res) return res; // 剪枝
        }
    }

    return res;
};
