let reverseBits = function(n) {
  const resArr = [];

  while (n) {
    resArr.push(n % 2);
    n = n >>> 1;
  }

  // 补0
  let cnt = 32 - resArr.length;
  while (cnt--) resArr.push(0);
  console.log(resArr, resArr.length);
  let r = 1, res = 0;
  for (let i = 31; i >= 0; i--) {
    console.log(res);
    res += resArr[i] * r;
    r = r * 2;
  }

  return res;
};
