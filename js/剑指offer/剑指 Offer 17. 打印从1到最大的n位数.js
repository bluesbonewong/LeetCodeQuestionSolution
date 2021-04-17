/**
 * @param {number} n
 * @return {number[]}
 */
let printNumbers = function (n) {
    let max = 1, res = [];
    for (let i = 0; i < n; i++) max *= 10;
    max = max - 1;

    for (let i = 1; i <= max; i++) res.push(i);

    return res;
};
