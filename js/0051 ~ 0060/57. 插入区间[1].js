/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
let insert = function (intervals, newInterval) {
    // 第一步：通过二分找区间插入的位置
    let bfind = (l, r) => {
        while (l < r) {
            let mid = l + r >> 1;
            if (intervals[mid][0] >= newInterval[0]) r = mid;
            else l = mid + 1;
        }

        return l;
    }

    let idx = bfind(0, intervals.length);

    // 第二步：先插入新区间，再合并区间
    intervals.splice(idx, 0, newInterval);

    // 按照合并区间的套路来
    let st = -Number.MAX_VALUE, ed = -Number.MAX_VALUE, res = [];
    for (let e of intervals) {
        if (ed < e[0]) {
            res.push([st, ed]);
            st = e[0];
        }

        ed = Math.max(ed, e[1]);
    }

    res.push([st, ed]);
    res.splice(0, 1);

    return res;
};
