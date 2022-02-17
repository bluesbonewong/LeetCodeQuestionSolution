/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
  let i = 0, j = s.length - 1;

  while (i <= j) {
    while (i <= j && !isValid(s[i])) i++;
    while (i <= j && !isValid(s[j])) j--;

    if (i > j) break;

    let a = s[i].toLowerCase();
    let b = s[j].toLowerCase();

    if (a !== b) return false;

    i++, j--;
  }

  return true;
};

function isValid(c) {
  return c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c >= "0" && c <= "9";
}
