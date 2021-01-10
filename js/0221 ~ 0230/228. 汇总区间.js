let summaryRanges = function (nums) {
    let i = 0, j = 0, n = nums.length, res = [];
    while (i < n && j < n) {
        if (nums[j] + 1 === nums[j + 1]) {
            j++;
            continue;
        }

        let str = '';
        if (i === j) str = nums[i] + '';
        else str = nums[i] + '->' + nums[j];

        res.push(str);

        j++, i = j;
    }

    return res;
};
