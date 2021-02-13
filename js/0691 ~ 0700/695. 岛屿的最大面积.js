/**
 * @param {number[][]} grid
 * @return {number}
 */

let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];

let maxAreaOfIsland = function (grid) {
    let cnt = 0, max = 0, vis = [], m = grid.length, n = grid[0].length;

    for (let i = 0; i < m; i++) {
        vis.push(new Array(n).fill(false));
    }

    let dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || vis[i][j] || grid[i][j] === 0) return;

        vis[i][j] = true;
        cnt++;

        for (let k = 0; k < 4; k++) {
            dfs(i + dx[k], j + dy[k]);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j);
            max = Math.max(max, cnt);
            cnt = 0;
        }
    }

    return max;
};
