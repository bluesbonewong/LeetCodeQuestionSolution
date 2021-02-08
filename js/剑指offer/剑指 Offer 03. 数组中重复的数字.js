/**
 * @param {number[]} nums
 * @return {number}
 */
let findRepeatNumber = function (nums) {
    let m = new Map();
    for (let e of nums) {
        if (m.get(e) === undefined) m.set(e, 1);
        else return e;
    }

    return -1;
};
