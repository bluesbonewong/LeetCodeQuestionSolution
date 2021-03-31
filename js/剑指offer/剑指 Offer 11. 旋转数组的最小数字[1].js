// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/solution/jian-zhi-offer-11-xuan-zhuan-shu-zu-de-z-4r6c/

/**
 * @param {number[]} numbers
 * @return {number}
 */
let minArray = function (numbers) {
    let l = 0, r = numbers.length - 1;

    while (l < r) {
        let mid = l + r >> 1;

        if (numbers[mid] < numbers[r]) r = mid;
        else if (numbers[mid] > numbers[r]) l = mid + 1; // mid不可能是最小值，因此l = mid + 1
        else r = r - 1;
    }

    return numbers[r];
};
