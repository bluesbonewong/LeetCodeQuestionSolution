// 本题没有0，更倾向于是一道规律模拟题
// 取余得到最小位，除进位
const str = "ZABCDEFGHIJKLMNOPQRSTUVWXY";
const pre = str.split("");

let convertToTitle = function (columnNumber) {
  // 这题比较特殊，取余为0说明是Z
  let res = [];
  while (columnNumber > 0) {
    res.push(pre[columnNumber % 26]);

    // 如果columnNumber是26的最大值，，需要特判
    if (columnNumber % 26 === 0) {
      columnNumber = Math.floor(columnNumber / 26) - 1;
    } else {
      columnNumber = Math.floor(columnNumber / 26);
    }
  }

  return res.reverse().join("");
};
