/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let mul = (a, b) => {
    let res = new Array(a.length + b.length).fill(0);

    for (let i = 0; i < a.length; i++)
        for (let j = 0; j < b.length; j++)
            res[i + j] += a[i] * b[j];

    let t = 0;
    for (let i = 0; i < res.length; i++) {
        res[i] += t;
        t = parseInt(res[i] / 10);
        res[i] = res[i] % 10;
    }

    while (res.length > 1 && res[res.length - 1] === 0) res.pop();

    return res;
}

let multiply = function (num1, num2) {
    let a = [], b = [];

    for (let i = num1.length - 1; i >= 0; i--) a.push(num1[i] - '0');
    for (let i = num2.length - 1; i >= 0; i--) b.push(num2[i] - '0');

    let c = mul(a, b);

    let res = '';
    for (let i = c.length - 1; i >= 0; i--) res += c[i];

    return res;
};
