/**
 * @param {character[][]} matrix
 * @return {number}
 */

// 参考：https://leetcode-cn.com/problems/maximal-square/solution/li-jie-san-zhe-qu-zui-xiao-1-by-lzhlyle/

// 搞清楚状态表示：dp[i + 1][j + 1]表示的是以i,j为右下角的最大正方形【变长】
let maximalSquare = function (matrix) {
    let m = matrix.length, n = matrix[0].length;
    // 初始化，让dp全为0，当然主要是第一行和第一列都是0
    let dp = [];
    for (let i = 0; i < m + 1; i++) {
        dp.push(new Array(n + 1).fill(0));
    }

    // dp过程
    let maxVal = -Number.MAX_VALUE;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '0') dp[i + 1][j + 1] = 0;
            else {
                // 关键状态转移方程
                dp[i + 1][j + 1] = Math.min(dp[i + 1][j], dp[i][j], dp[i][j + 1]) + 1;
            }
            maxVal = Math.max(maxVal, dp[i + 1][j + 1]);
        }
    }

    return maxVal * maxVal;
};
