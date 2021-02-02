/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
let uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length; // m行，n列

    // 初始化f
    let f = [];
    for (let i = 0; i < m + 1; i++) {
        f.push(new Array(n + 1).fill(0));
    }

    if (obstacleGrid[0][0] === 0) f[1][1] = 1;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (obstacleGrid[i - 1][j - 1] === 1) {
                f[i][j] = 0;
                continue;
            }

            if (i === 1 && j === 1) continue; // 第一个元素已经初始化，因此跳过，否则会有问题

            f[i][j] = f[i - 1][j] + f[i][j - 1];
        }
    }

    return f[m][n];
};
