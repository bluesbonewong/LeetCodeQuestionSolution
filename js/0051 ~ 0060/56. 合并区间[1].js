let merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

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
