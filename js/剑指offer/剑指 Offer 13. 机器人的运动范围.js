/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 向量
let dx = [-1, 0, 1, 0], dy = [0, 1, 0, 1];

let movingCount = function (m, n, k) {
    let sum = [], cnt = 0; // sum充当vis数组，因为sum的作用就是计算出哪些格子不能去
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (sum[i] === undefined) sum[i] = [];

            let c = 0, ti = i, tj = j;
            while (ti > 0 || tj > 0) {
                c += ti % 10, c += tj % 10;
                ti = parseInt(ti / 10), tj = parseInt(tj / 10);
            }

            sum[i][j] = c > k ? true : false;
        }
    }

    let dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || sum[i][j]) return;

        // 只要能进入该格子，cnt就可以++
        cnt++;
        sum[i][j] = true;
        for (let k = 0; k < 4; k++) {
            dfs(i + dx[k], j + dy[k], cnt + 1);
        }
    };

    dfs(0, 0);

    return cnt;
};
