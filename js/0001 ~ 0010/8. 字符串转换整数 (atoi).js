/**
 * @param {string} s
 * @return {number}
 */
let getMaxInt = () => {
    let cnt = 31, num = 1;
    // while循环后，num === -2^31
    while (cnt--) num = num << 1;

    return num * (-1) - 1;
};

let myAtoi = function (s) {
    s = s.trim(); // 去除空格

    let flag = s[0] === "-" ? -1 : 1, temp = "";
    let i = (s[0] === "-" || s[0] === "+") ? 1 : 0;
    for (; i < s.length; i++) {
        if (Number.isNaN(parseInt(s[i]))) break;

        temp += s[i];
    }

    if (temp === "") return 0;

    let ans = parseInt(temp), maxInt = getMaxInt();
    if (flag === -1) {
        if (ans > maxInt + 1) return -1 * (maxInt + 1);
    } else {
        if (ans > maxInt) return maxInt;
    }

    return ans * flag;
};
