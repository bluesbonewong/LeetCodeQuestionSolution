let fib = function (n) {
    if (n <= 1) return n;
    // 初始化
    let a = 0, b = 1;

    // dp
    for (let i = 2; i <= n; i++) {
        // 让a,b,c来回滚动
        let c = a + b;
        a = b, b = c;
    }

    return b;
};
