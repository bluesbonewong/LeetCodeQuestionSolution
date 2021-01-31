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
        // 在js中，把n >> 1全部要改成parseInt(n / 2)
        // 因为在上面有 n = -n，如果n === -2^31，那么转换或n = 2^31，超出了int范围
        // 移位运算只会移动32位，因此会有问题！
        n = parseInt(n / 2);
        x = x * x;
    }

    if (flag) return 1 / res;
    else return res;
};
