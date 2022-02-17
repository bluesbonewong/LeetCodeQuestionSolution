// 核心是区间替换的思想
// 将从nums[i]出发可以一次抵达的所有点看作一个区间
// 从A区间可以推算出B区间的end，从而进行更新
// 更新一次区间，就相当于跳跃了一次
let jump = function (nums) {
  let steps = 0;
  let end = 0; // 区间边界终点，核心就是更新边界
  let longestDistance = 0;

  // 不用访问最后一个元素，因为之前的区间一定可以跳到终点
  for (let i = 0; i < nums.length - 1; i++) {
    longestDistance = Math.max(longestDistance, i + nums[i]);

    // 到了end之后就要
    // 1.更新区间end
    // 2.更新跳跃次数，因为更新区间相当于跳跃了一次
    if (i === end) {
      end = longestDistance;
      steps++;
    }
  }

  return steps;
};
