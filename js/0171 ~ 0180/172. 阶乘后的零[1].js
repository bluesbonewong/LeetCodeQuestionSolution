// https://leetcode-cn.com/problems/factorial-trailing-zeroes/solution/172-jie-cheng-hou-de-ling-by-bluesbone_w-2dza/

/**
 * @param {number} n
 * @return {number}
 */

let trailingZeroes = function (n) {
    let cnt = 0, p = 5; // cnt计算5出现的次数
    while (parseInt(n / p) !== 0) {
        cnt += parseInt(n / p);
        p = p * 5;
    }

    return cnt;
};
