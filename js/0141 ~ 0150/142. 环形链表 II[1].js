// 参考：https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/linked-list-cycle-ii-kuai-man-zhi-zhen-shuang-zhi-/

// 第一次相遇：f = 2s, f = s + nb => f = 2nb, s = nb
// 设新指针f走到入口的距离为k，k = a + nb
// 而s已经走了nb => 再让s走a步即可
// 第二次相遇：f和s同时走，再次相遇时，s即走了a步

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let detectCycle = function (head) {
    let f = s = head;

    // 第一次在环上相遇
    while (f !== null && f.next !== null) {
        f = f.next.next;
        s = s.next;

        if (f === s) break;
    }

    // 说明无环
    if (f === null || f.next === null) return null;

    // 说明有环，构造第二次在环上相遇
    f = head;
    while (f !== s) f = f.next, s = s.next;

    return f;
};
