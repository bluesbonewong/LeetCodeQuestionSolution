/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
    let l = 0, r = x;
    while (r - l > 0.001) {
        let mid = (l + r) / 2.0;

        if (mid * mid >= x) r = mid;
        else l = mid;
    }
    // 由于题目是直接舍去小数部分，而并非四舍五入，因此会有误差情况出现
    // 比如x = 4时，最后l = 1.999，Math.floor(l) = 1，获得了错误的结果
    // 因此return的时候要进行一轮判定
    let ans = Math.floor(l);
    return (ans + 1) * (ans + 1) <= x ? ans + 1 : ans;
};
