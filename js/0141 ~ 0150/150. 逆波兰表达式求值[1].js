/**
 * @param {string[]} tokens
 * @return {number}
 */
let evalRPN = function (tokens) {
    let stk = [], tt = -1;
    for (let e of tokens) {
        if (!Number.isNaN(parseInt(e))) {
            stk[++tt] = parseInt(e);
            continue;
        }

        let b = stk[tt--], a = stk[tt--], res;
        switch (e) {
            case "+":
                res = a + b;
                break;
            case "-":
                res = a - b;
                break;
            case "*":
                res = a * b;
                break;
            case "/":
                res = parseInt(a / b);
                break;
        }

        stk[++tt] = res;
    }

    return stk[tt];
};
