let cmp = (a, b) => a - b

let fourSum = function (nums, target) {
    let n = nums.length, res = [];
    nums.sort(cmp);
    for (let d = 0; d + 3 < n; d++) {
        for (let c = d + 1; c + 2 < n; c++) {
            let a = c + 1, b = n - 1;
            while (a < b) {
                let sum = nums[a] + nums[b] + nums[c] + nums[d];
                if (sum < target) a++;
                else if (sum > target) b--;
                else {
                    res.push([nums[d], nums[c], nums[a], nums[b]]);
                    a++, b--;
                }
            }
        }
    }

    // 对res去重，这里建议用map
    // 二维数组的去重在js里比较麻烦，首先要保证二维数组里的元素已经有序，然后合并为字符串作为key
    let mp = new Map(), ans = [];
    for (let e of res) {
        let key = e.join();
        mp.set(key, e);
    }
    for (let item of mp) ans.push(item[1]);

    return ans;
};
