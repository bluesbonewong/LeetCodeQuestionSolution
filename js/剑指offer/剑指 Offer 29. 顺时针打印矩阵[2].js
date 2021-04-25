/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

let failed = {
    "r": "d",
    "d": "l",
    "l": "t",
    "t": "r"
};

let next = {
    "r": [0, 1],
    "d": [1, 0],
    "l": [0, -1],
    "t": [-1, 0],
};

let spiralOrder = function (matrix) {
    if (matrix.length === 0) return matrix;
    let m = matrix.length, n = matrix[0].length, res = [], vis = new Array(m);
    for (let i = 0; i < m; i++) vis[i] = [];

    let d = "r";
    let dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || vis[i][j]) {
            d = failed[d];
            return false;
        }

        res.push(matrix[i][j]);
        vis[i][j] = true;

        // 只用转变一次方向
        if (!dfs(i + next[d][0], j + next[d][1])) {
            dfs(i + next[d][0], j + next[d][1]);
        }

        return true;
    };

    dfs(0, 0);

    return res;
};
