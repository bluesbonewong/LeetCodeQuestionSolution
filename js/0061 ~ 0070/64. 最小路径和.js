/**
 * @param {number[][]} grid
 * @return {number}
 */

let minPathSum = function (grid) {
    let m = grid.length, n = grid[0].length;

    // 初始化第一行
    let f = [];
    f.push(new Array(n + 1).fill(Number.MAX_VALUE));
    // 构建f
    for (let i = 1; i <= m; i++) {
        f.push(new Array(n + 1).fill(0));
        // 初始化第一列
        f[i][0] = Number.MAX_VALUE;
    }

    f[1][1] = grid[0][0];
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === 1 && j === 1) continue; // 跳过第一个
            f[i][j] = Math.min(f[i][j - 1], f[i - 1][j]) + grid[i - 1][j - 1];
        }
    }

    return f[m][n];
};
