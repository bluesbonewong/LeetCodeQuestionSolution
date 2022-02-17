const letters = "-ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lettersMap = {};
letters.forEach((cv, idx) => lettersMap[cv] = idx);

let titleToNumber = function(columnTitle) {
  let n = columnTitle.length, r = 1, res = 0;

  while (n--) {
    let curChar = columnTitle[n];
    res += lettersMap[curChar] * r;
    r *= 26;
  }

  return res;
};
