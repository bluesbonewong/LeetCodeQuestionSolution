/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let myPow = function (x, n) {
    let flag = false;
    if (n < 0) {
        n = -n;
        flag = true;
    }

    let res = 1;
    while (n) {
        if (n & 1) res = res * x;
        // n为正数，当做无符号整数做逻辑右移
        n = n >>> 1;
        x = x * x;
    }

    if (flag) return 1 / res;
    return res;
};
