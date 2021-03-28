/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 两个指针：0指针找0，非0指针找0指针之后的【第一个】非0数，然后二者交换
// 这样的算法可以【保证每次交换后，0指针的左侧都是非0数】

let moveZeroes = function (nums) {
    let n = nums.length;
    // i - 0指针，j - 非0指针
    for (let i = 0, j = 0; i < n && j < n;) {
        while (i < n && nums[i] !== 0) i++;
        if (i >= n) break;

        j = i + 1;
        while (j < n && nums[j] === 0) j++;
        if (j >= n) break;

        // swap
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};
