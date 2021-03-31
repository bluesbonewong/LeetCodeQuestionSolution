/**
 * @param {number} n
 * @return {number}
 */
let integerBreak = function (n) {
    let dp = new Array(n).fill(0);
    dp.unshift(...[-1, 1, 1]);

    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            let cur = Math.max(j * (i - j), j * dp[i - j]);
            dp[i] = Math.max(dp[i], cur);
        }
    }

    return dp[n];
};
