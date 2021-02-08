/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1 = version1.split('.').map(e => {
        return parseInt(e);
    });

    let v2 = version2.split('.').map(e => {
        return parseInt(e);
    });

    let n = Math.max(v1.length, v2.length);
    for (let i = 0; i < n; i++) {
        let a = b = 0;
        if (i < v1.length) a = v1[i];
        if (i < v2.length) b = v2[i];

        if (a > b) return 1;
        else if (a < b) return -1;
    }

    return 0;
};
