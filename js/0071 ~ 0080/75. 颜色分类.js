/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let sortColors = function (nums) {
    let m = [];
    for (let e of nums) {
        if (m[e] === undefined) m[e] = 0;

        m[e]++;
    }

    let idx = 0;
    for (let k = 0; k < 3; k++) {
        let counts = m[k];
        for (let i = 0; i < counts; i++) {
            nums[idx++] = k;
        }
    }
};
