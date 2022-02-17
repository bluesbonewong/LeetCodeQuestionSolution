// 对i,j而言
// 左上是：i- 1, j - 1，右上是i -1, j

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = function (rowIndex) {
  let arr = [[1]];
  for (let i = 1; i <= rowIndex; i++) arr.push([]);

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = 0; j <= i; j++) {
      let leftTop = 0, rightTop = 0;
      // 左上值未越界
      if (j - 1 >= 0) leftTop = arr[i - 1][j - 1];
      // 右上值未越界
      if (j <= i - 1) rightTop = arr[i - 1][j];

      arr[i][j] = leftTop + rightTop;
    }
  }

  return arr[rowIndex];
};
