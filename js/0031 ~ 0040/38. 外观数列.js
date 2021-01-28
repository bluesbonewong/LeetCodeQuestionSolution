/**
 * @param {number} n
 * @return {string}
 */

let countAndSay = function (n) {
    let cas = (n, str) => {
        if (n === 1) {
            return str;
        }

        let i = 0, cnt = 1, newstr = '';
        while (i < str.length) {
            if (i + 1 < str.length && str[i + 1] === str[i]) {
                cnt++, i++;
            } else {
                newstr = newstr + cnt + str[i];
                cnt = 1, i++;
            }
        }

        return cas(n - 1, newstr);
    }

    return cas(n, '1');
};
