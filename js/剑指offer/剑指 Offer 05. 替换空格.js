/**
 * @param {string} s
 * @return {string}
 */
let replaceSpace = function (s) {
    let sArr = s.split(' ');
    return sArr.join('%20');
};
