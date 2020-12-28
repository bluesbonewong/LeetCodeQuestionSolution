/**
 * @param {number} n
 * @return {string[]}
 */
let d = {'(': ')'}, res = [], gn = 0; // gn是局部变量n的全局化;

// stk - 栈，t - 栈顶指针，cstr - 当前字符串(实际上是对所有操作的记录)), lr - 左括号剩余，rr - 右括号剩余，这两个是为了剪枝
let dfs = (stk, t, cstr, lr, rr) => {
    if (cstr.length === gn * 2) {
        if (t === -1) res.push(cstr); // 栈空，则cstr符合要求
        return;
    }

    // 剪枝：这种情况，栈不可能被清空
    if (lr <= 0 || rr <= 0) return;

    // 放入'('，左括号不存在匹配情况，因此无需操作栈
    dfs(stk + '(', t + 1, cstr + '(', lr - 1, rr);

    // 放入')'
    // 判断是否匹配
    if (d[stk[t]] === ')') {
        t--, stk.substring(0, t + 1); // 匹配则出栈
    } else { // 否则直接入栈
        t++, stk += ')';
    }

    dfs(stk, t, cstr + ')', lr, rr - 1);
}

let generateParenthesis = function (n) {
    gn = n;
    dfs('(', 0, '(', n, n);

    // 清空全局变量
    let ans = res;
    res = [];
    return ans;
};
