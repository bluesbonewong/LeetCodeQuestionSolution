let isValid = function (s) {
    const n = s.length;
    if (n === 0) return true;

    const mp = {'(': ')', '{': '}', '[': ']'};
    let stk = [], t = -1; // 栈，t - 栈顶指针
    for (let i = 0; i < n; i++) {
        // 栈空
        if (t < 0) {
            t++, stk[t] = s[i]; // 入栈
            continue;
        }

        // 栈非空
        if (mp[stk[t]] === s[i]) t--; // 符号匹配成功，则出栈
        else t++, stk[t] = s[i]; // 入栈
    }

    return t < 0;
};
