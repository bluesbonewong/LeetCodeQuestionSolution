/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 利用1 ≤ a[i] ≤ n
// 把每个数当成index，把相应index的数标记为相反数，如果相反数又变为正数，则说明该数出现了两次
let findDuplicates = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;

        if (nums[index] < 0) res.push(index + 1);

        nums[index] = -nums[index];
    }

    return res;
};
