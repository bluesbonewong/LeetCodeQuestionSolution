/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortArray = function (nums) {
  quick_sort(nums, 0, nums.length - 1);
  return nums;

  function quick_sort(q, l, r) {
    if (l >= r) return;

    let x = q[l], i = l - 1, j = r + 1;
    while (i < j) {
      do i++; while (q[i] < x);
      do j--; while (q[j] > x);
      if (i < j) [q[i], q[j]] = [q[j], q[i]];
    }

    quick_sort(q, l, j);
    quick_sort(q, j + 1, r);
  }
};
