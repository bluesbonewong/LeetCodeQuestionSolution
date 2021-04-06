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

let isNumber = (c) => {
    return c >= "0" && c <= "9";
};

// 转化为逆波兰表达式(后缀表达式)数组
let transToRPN = (s) => {
    let stk = [], tt = -1, res = [];
    for (let i = 0; i < s.length; i++) {
        // 数字直接输出所有数字
        if (isNumber(s[i])) {
            let t = 0;
            while (isNumber(s[i])) {
                t = t * 10 + parseInt(s[i++]);
            }
            i--;
            res.push(t);
            continue;
        }

        // 遇到")"，把栈内符号全部弹出，加入到res
        if (s[i] === ")") {
            while (stk[tt] !== "(") res.push(stk[tt--]);
            tt--; // 注意要把"("出栈
            continue;
        }

        // 处理符号
        // 特判"("，直接入栈
        if (s[i] === "(") {
            stk[++tt] = s[i];
            continue;
        }

        // 如果符号优先级<=栈顶符号优先级，则循环弹出直到不满足条件
        while (m[s[i]] <= m[stk[tt]]) res.push(stk[tt--]);

        stk[++tt] = s[i];
    }

    while (tt > -1) res.push(stk[tt--]);

    console.log("rpn", res);

    return res;
};

let calculate = function (s) {
    // 把s去除空格
    // 保证每个双目运算符两侧都有数字
    s = s.replaceAll(" ", "").replaceAll("(-", "(0-").replaceAll("(+", "(0+");
    let rpn = transToRPN(s), stk = [], tt = -1;
    // 逆波兰表达式求值
    for (let e of rpn) {
        if (typeof e === "number") {
            stk[++tt] = e;
            continue;
        }

        // 为了防止有负数出现，这里我们要对a做一次判断看栈是否为空
        let b = stk[tt--], a = tt === -1 ? 0 : stk[tt--], res;
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
            case "%":
                res = a % b;
                break;
        }
        stk[++tt] = res;
    }

    return stk[tt];
};
