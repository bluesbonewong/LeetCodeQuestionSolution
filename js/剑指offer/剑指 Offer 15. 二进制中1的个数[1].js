/**
 * @param {number} n - a positive integer
 * @return {number}
 */
let hammingWeight = function (n) {
    let cnt = 0;
    while (n !== 0) {
        if (n & 1 === 1) cnt++;
        n = n >>> 1;
    }

    return cnt;
};
