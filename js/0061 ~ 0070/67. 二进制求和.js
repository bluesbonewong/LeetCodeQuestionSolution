/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  const A = a.split("").reverse();
  const B = b.split("").reverse();
  const res = [];

  let t = 0;
  for (let i = 0; i < A.length || i < B.length; i++) {
    if (i < A.length) t += parseInt(A[i]);
    if (i < B.length) t += parseInt(B[i]);

    res.push(t % 2);
    t = Math.floor(t / 2);
  }

  if (t !== 0) res.push(t);

  return res.reverse().join("");
};

console.log(addBinary("111", "11"));
console.log(addBinary("1010", "1011"));
