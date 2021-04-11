/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

let myPow = function (x, n) {
    // 预处理
    let pre = [x]; // m[idx]表示x^(2^idx)
    for (let i = 1; i <= 31; i++) pre[i] = pre[i - 1] * pre[i - 1];

    // 计算idx
    let idxArr = [], cnt = 0, tempn = Math.abs(n);
    while (tempn !== 0) {
        if (tempn & 1 === 1) idxArr.push(cnt);
        cnt++;
        tempn = tempn >>> 1;
    }

    // 计算结果
    let res = 1;
    for (let idx of idxArr) res *= pre[idx];

    if (n < 0) return 1 / res;

    return res;
};
