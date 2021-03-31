// https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/jian-zhi-offer-14-i-jian-sheng-zi-by-blu-7ucv/

/**
 * @param {number} n
 * @return {number}
 */
let cuttingRope = function (n) {
    let dp = new Array(n).fill(0);
    dp.unshift(...[-1, 1, 1]);

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            let cur = Math.max(j * (i - j), j * dp[i - j]);
            dp[i] = Math.max(dp[i], cur);
        }
    }

    return dp[n];
};
