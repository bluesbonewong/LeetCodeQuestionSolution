/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 看官方题解
// 核心在与通过x + nums[x]更新最远能够到达的距离max
// 只要在max范围内，都能通过若干跳到达，如果遍历到的元素超过了max，说明后面的元素皆无法到达

let canJump = function (nums) {
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        // 如果遍历到的元素超过了max，说明后面的元素皆无法到达
        if (i > max) break;

        if (max >= nums.length - 1) return true;

        max = Math.max(i + nums[i], max);
    }

    return false;
};
