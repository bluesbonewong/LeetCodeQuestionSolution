/**
 * @param {character[][]} grid
 * @return {number}
 */

// 向量
let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];

let numIslands = function (grid) {
    let m = grid.length, n = grid[0].length;
    let vis = [];
    for (let i = 0; i < m; i++)
        vis.push(new Array(n).fill(false));

    let dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || vis[i][j] || grid[i][j] === '0') return;

        vis[i][j] = true;
        for (let k = 0; k < 4; k++) {
            dfs(i + dx[k], j + dy[k]);
        }
    }

    let cnt = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && vis[i][j] === false) cnt++;
            dfs(i, j);
        }
    }

    return cnt;
};
