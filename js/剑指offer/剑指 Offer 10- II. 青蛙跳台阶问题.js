/**
 * @param {number} n
 * @return {number}
 */
let numWays = function (n) {
    if (n === 0) return 1;
    if (n <= 2) return n;

    let [a, b, c] = [1, 1, 2];

    for (let i = 3; i <= n; i++) {
        a = b, b = c;
        c = (a + b) % (1e9 + 7);
    }

    return c;
};
