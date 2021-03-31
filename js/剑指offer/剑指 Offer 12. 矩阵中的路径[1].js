/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 向量：上右下左
let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];

let exist = function (board, word) {
    let m = board.length, n = board[0].length, len = word.length, res = false, vis = [];
    for (let i = 0; i < m; i++) vis.push([]);

    let dfs = (i, j, d) => {
        if (i < 0 || i >= m || j < 0 || j >= n || vis[i][j] || board[i][j] !== word[d] || res) return;

        if (d === len - 1) {
            res = true;
            return;
        }

        vis[i][j] = true;
        for (let k = 0; k < 4; k++) {
            if (res) return;

            let ni = i + dx[k], nj = j + dy[k]; // ni - new i
            dfs(ni, nj, d + 1);
        }
        vis[i][j] = false;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, 0);
            if (res) return res;
        }
    }

    return res;
};
