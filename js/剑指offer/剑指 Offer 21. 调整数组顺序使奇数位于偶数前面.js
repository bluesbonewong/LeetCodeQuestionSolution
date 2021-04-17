/**
 * @param {number[]} nums
 * @return {number[]}
 */
let exchange = function (nums) {
    let i = 0, j = nums.length - 1;

    while (i < j) {
        if (nums[i] % 2 === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j--;
        } else i++;
    }

    return nums;
};
