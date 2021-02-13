/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let addStrings = function (num1, num2) {
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();

    let t = 0, res = [];
    for (let i = 0; i < num1.length || i < num2.length; i++) {
        if (i < num1.length) t += (num1[i] - '0');
        if (i < num2.length) t += (num2[i] - '0');

        res.push(t % 10);
        t = parseInt(t / 10);
    }

    if (t > 0) res.push(t);

    let ans = res.reverse().join('');

    return ans;
};
