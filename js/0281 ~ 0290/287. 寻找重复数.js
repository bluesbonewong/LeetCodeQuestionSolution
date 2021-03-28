/**
 * @param {number[]} nums
 * @return {number}
 */
let findDuplicate = function (nums) {
    let m = new Map();

    for (let e of nums) {
        if (!m.has(e)) m.set(e, 0);
        m.set(e, m.get(e) + 1);

        if (m.get(e) > 1) return e;
    }
};
