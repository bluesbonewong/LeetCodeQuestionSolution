/**
 * @param {character[][]} board
 * @return {boolean}
 */

// 1. 学习如何一次迭代完成所有行和所有列的map
// 2. 学习如何迭代矩阵内部分割出来的小box，关键在于bindex = parseInt(i / 3) + parseInt(j / 3) * 3;
let isValidSudoku = function (board) {
    // 初始化map
    let rm = [], cm = [], bm = [];
    for (let i = 0; i < 9; i++) {
        rm[i] = [], cm[i] = [], bm[i] = [];
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue;
            let num = board[i][j];

            // 行
            if (!rm[i][num]) rm[i][num] = num;
            else return false;
            // 列
            if (!cm[j][num]) cm[j][num] = num;
            else return false;
            // box
            let bindex = parseInt(i / 3) + parseInt(j / 3) * 3;
            if (!bm[bindex][num]) bm[bindex][num] = num;
            else return false;
        }
    }

    return true;
};
