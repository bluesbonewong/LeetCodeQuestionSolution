/**
 * @param {number} n
 * @return {number}
 */

// https://leetcode-cn.com/problems/unique-binary-search-trees/solution/hua-jie-suan-fa-96-bu-tong-de-er-cha-sou-suo-shu-b/
// 实现：G(n)=G(0)∗G(n−1)+G(1)∗(n−2)+...+G(n−1)∗G(0)

let numTrees = function (n) {
    let g = new Array(n + 1).fill(0);
    g[0] = 1, g[1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j <= i - 1; j++) {
            g[i] = g[i] + g[j] * g[i - j - 1];
        }
    }

    return g[n];
};
