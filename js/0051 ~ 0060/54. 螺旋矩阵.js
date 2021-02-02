/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 向量，right，down，left，top
let dObj = {'r': [0, 1], 'd': [1, 0], 'l': [0, -1], 't': [-1, 0]};

// 映射，右失败了就向下，下失败了就向左，以此类推
let failed = {'r': 'd', 'd': 'l', 'l': 't', 't': 'r'};

let spiralOrder = function (matrix) {
    let res = [], vis = [], n = matrix.length, m = matrix[0].length; // n行，m列
    // 初始化vis
    for (let i = 0; i < n; i++) vis.push([]);

    let d = 'r'; // direction
    // i,j - 行号，列号
    let dfs = (i, j) => {
        if (i < 0 || i > n - 1 || j < 0 || j > m - 1 || vis[i][j]) {
            d = failed[d]; // 变更方向
            return false;
        }

        vis[i][j] = true;
        res.push(matrix[i][j]);

        // 先dfs，看看是否成功，不成功按照新方向再dfs
        if (!dfs(i + dObj[d][0], j + dObj[d][1])) {
            dfs(i + dObj[d][0], j + dObj[d][1])
        }

        // 到这里说明该结点已经访问成功
        return true;
    }

    dfs(0, 0);

    return res;
};
