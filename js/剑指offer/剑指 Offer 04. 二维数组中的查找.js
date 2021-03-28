/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let findNumberIn2DArray = function (matrix, target) {
    if (matrix.length === 0) return false;
    let m = matrix.length, n = matrix[0].length; // m行n列
    let i = 0, j = n - 1; // 定位到右上角

    while (i < m && j >= 0) {
        let num = matrix[i][j];

        if (num === target) return true;
        else if (num < target) i++;
        else if (num > target) j--;
    }

    return false;
};
