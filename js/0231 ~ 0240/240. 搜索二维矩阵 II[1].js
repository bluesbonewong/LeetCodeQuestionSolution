// 利用每行每列的单调性，从右上角的元素开始，设其为t
// t === target ， 则找到了答案
// t < target，说明该行其它元素必然小于target，可以直接删去(跳过)该行
// t > target，说明该列其它元素必然大于target，可以直接删去(跳过)该列

let searchMatrix = function (matrix, target) {
    let m = matrix.length, n = matrix[0].length;
    // 从右上角开始
    let i = 0, j = n - 1;
    while (i <= m - 1 && j >= 0) {
        if (matrix[i][j] === target) return true;

        if (matrix[i][j] < target) { // 去掉一行
            i++;
        } else if (matrix[i][j] > target) { // 去掉一列
            j--;
        }
    }

    return false;
};
