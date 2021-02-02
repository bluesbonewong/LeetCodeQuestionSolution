/**
 * @param {number} n
 * @return {number[][]}
 */

let direction = {
    'r': 'd',
    'd': 'l',
    'l': 't',
    't': 'r'
}

let next = {
    'r': [0, 1],
    'd': [1, 0],
    'l': [0, -1],
    't': [-1, 0]
}

let generateMatrix = function (n) {
    let m = [], vis = [];
    for (let i = 0; i < n; i++) m.push([]), vis.push([]);

    let i = j = 0, d = 'r';
    for (let num = 1; num <= n * n; num++) {
        vis[i][j] = true;
        m[i][j] = num;
        // 更新i，j
        i += next[d][0], j += next[d][1];
        // 对i，j进行容错处理
        if (i < 0 || i > n - 1 || j < 0 || j > n - 1 || vis[i][j]) {
            // i, j先回退
            i -= next[d][0], j -= next[d][1];
            // 改变方向
            d = direction[d];
            // 重新设置i, j
            i += next[d][0], j += next[d][1];
        }
    }

    return m;
};
