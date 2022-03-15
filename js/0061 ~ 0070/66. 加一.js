const plusOne = function (digits) {
  digits = digits.reverse();
  const res = [];

  let t = 1;
  for (let i = 0; i < digits.length; i++) {
    t += digits[i];
    res.push(t % 10);
    t = Math.floor(t / 10);
  }

  if (t !== 0) res.push(t);

  return res.reverse();
};
