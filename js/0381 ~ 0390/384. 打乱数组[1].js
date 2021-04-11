/**
 * @param {number[]} nums
 */
let Solution = function (nums) {
    this.rst = [...nums];
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    this.nums = [...this.rst];
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let nums = this.nums, n = nums.length;
    for (let i = 0; i < nums.length; i++) {
        let idx = parseInt(Math.random() * n);
        [nums[i], nums[idx]] = [nums[idx], nums[i]];
    }
    return nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
