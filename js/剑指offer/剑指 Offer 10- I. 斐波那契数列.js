/**
 * @param {number} n
 * @return {number}
 */
let fib = function (n) {
    if (n <= 1) return n;
    let [a, b, c] = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        a = b, b = c;
        c = (a + b) % (1e9 + 7);
    }

    return c;
};
