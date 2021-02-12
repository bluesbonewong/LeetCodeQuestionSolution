/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

let checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    let m1 = new Map(), m2 = new Map(); // map
    // 初始化m1
    for (let e of s1) {
        if (!m1.get(e)) m1.set(e, 0);
        m1.set(e, m1.get(e) + 1);
    }

    // 检查该字符是否存在于s1和滑动窗口中，并且数量一致
    let check = c => {
        if (m1.get(c) && m1.get(c) === m2.get(c)) return true;

        return false;
    }

    // 遍历s2，维护一个滑动窗口，cnt维护s1和滑动窗口里相同的字符数量
    // i - 窗口左端点，j - 窗口右端点
    for (let i = 0, j = 0, cnt = 0; j < s2.length; j++) {
        // 未将s2[j]加入m2时，check就是true，说明有一个字符数量必然不再相等
        if (check(s2[j])) cnt--;

        if (!m2.get(s2[j])) m2.set(s2[j], 0);
        m2.set(s2[j], m2.get(s2[j]) + 1);

        // 将s2[j]加入m2，再看看check
        if (check(s2[j])) cnt++;

        // 对比滑动窗口长度和s1的长度，如果超过，就移动窗口
        if (j - i + 1 > s1.length) {
            // 左侧未移动前，check
            if (check(s2[i])) cnt--;
            m2.set(s2[i], m2.get(s2[i]) - 1);
            // 左侧移动后，check
            if (check(s2[i])) cnt++;

            i++;
        }

        if (cnt === m1.size) return true;
    }

    return false;
};
