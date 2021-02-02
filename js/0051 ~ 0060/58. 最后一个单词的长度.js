/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function (s) {
    let i = s.length - 1, str = '', flag = false; // flag表示是否已经遇到了字母
    while (i >= 0) {
        if (s[i] === ' ') {
            if (flag) break;

            i--;
            continue;
        }

        str += s[i];
        flag = true, i--;
    }

    return str.length;
};
