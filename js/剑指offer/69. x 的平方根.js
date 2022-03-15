// t * t - x <= EF
const mySqrt = function (x) {
  const EF = 0.0001;

  let l = 0, r = x;
  while (r - l >= EF) {
    let mid = (l + r) / 2;
    if (mid * mid > x) r = mid;
    else l = mid;
  }

  const res = Math.floor(r);
  // 由于题目是要求向下取整，因此选择略大一些的r端点
  // 由于两个端点可能出现如mySqrt(2147395599) => l = 46339.999959675944, r = 46340.0000207086，答案是46339的情况
  // 因此需要在进行一次判定
  // 最后选定的区间端点
  return res * res <= x ? res : res - 1;
};
