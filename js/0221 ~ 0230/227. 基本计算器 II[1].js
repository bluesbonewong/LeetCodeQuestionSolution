/**
 * @param {string} s
 * @return {number}
 */
let m = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "%": 2,
};

let strIsNum = (c) => {
    return c >= "0" && c <= "9";
};

let toSuffix = (s) => {
    let stk = [], tt = -1, res = [];
    for (let i = 0; i < s.length; i++) {
        if (strIsNum(s[i])) {
            let t = 0;
            while (strIsNum(s[i])) t = t * 10 + parseInt(s[i++]);
            i--;
            res.push(t);
            continue;
        }

        if (s[i] === ")") {
            while (stk[tt] !== "(") res.push(stk[tt--]);
            tt--;
            continue;
        }

        if (s[i] === "(") {
            stk[++tt] = s[i];
            continue;
        }

        while (m[s[i]] <= m[stk[tt]]) res.push(stk[tt--]);

        stk[++tt] = s[i];
    }

    while (tt > -1) res.push(stk[tt--]);

    return res;
};

let calculate = function (s) {
    s = s.replaceAll(" ", "").replaceAll("(+", "(0+").replaceAll("(-", "(0-");
    let sfx = toSuffix(s), stk = [], tt = -1;

    for (let e of sfx) {
        if (typeof e === "number") {
            stk[++tt] = e;
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
