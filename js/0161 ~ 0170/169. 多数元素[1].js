/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode-cn.com/problems/majority-element/solution/169-duo-shu-yuan-su-by-bluesbone_wong-8i1t/

let majorityElement = function (nums) {
    if (nums.length < 1) return -1;

    let lot = nums[0], cnt = 1; // 假设第一个数是众数，出现次数cnt为1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === lot) { // 当前数就是众数，cnt++
            cnt++;
        } else {
            if (cnt === 0) { // 前众数被消耗完，假设当前数是众数
                lot = nums[i];
                cnt = 1;
            } else { // 用众数消耗当前数
                cnt--;
            }
        }
    }

    return lot;
};
