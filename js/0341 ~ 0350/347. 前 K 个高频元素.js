/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let qsort = (q, l, r) => {
    if (l >= r) return;

    let x = q[l][1], i = l - 1, j = r + 1;
    while (i < j) {
        do i++; while (q[i][1] < x);
        do j--; while (q[j][1] > x);
        if (i < j) [q[i], q[j]] = [q[j], q[i]];
    }

    qsort(q, l, j);
    qsort(q, j + 1, r);
}

let topKFrequent = function (nums, k) {
    let m = new Map();
    for (let num of nums) {
        if (!m.get(num)) m.set(num, 0);

        m.set(num, m.get(num) + 1);
    }

    let cntArr = [];
    for (let item of m) {
        cntArr.push(item);
    }

    // 快排
    qsort(cntArr, 0, cntArr.length - 1);

    let res = [];
    for (let i = cntArr.length - 1; i >= 0; i--) {
        if (k === 0) break;
        k--;
        res.push(cntArr[i][0]);
    }

    return res;
};
