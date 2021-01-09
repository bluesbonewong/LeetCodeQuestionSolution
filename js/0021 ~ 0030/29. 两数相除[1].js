// 一些全局定义
let INT_MAX = 0x7fffffff, INT_MIN = -INT_MAX - 1;

let divide = function (x, y) {
    // 判断正负
    let is_minus = false;
    if (x < 0 && y < 0 || x > 0 && y > 0) is_minus = true;

    // 计算绝对值
    let a = Math.abs(x), b = Math.abs(y);

    // 初始化
    let exp = []; // 存储2^k * b
    for (let i = b; i <= a; i = i + i) exp.push(i);

    // 计算
    let i = exp.length - 1, res = 0;

    while (i >= 0) {
        if (a - exp[i] >= 0) {
            a = a - exp[i];
            // 如果i是31，注意1 << 31会成为INT_MIN，即-2^31，因此要特判
            if (i === 31) res = res - INT_MIN;
            else res = res + (1 << i);
        }
        i--;
    }

    if (!is_minus) res = -res;
    if (res < INT_MIN || res > INT_MAX) res = INT_MAX;
    return res;
};
