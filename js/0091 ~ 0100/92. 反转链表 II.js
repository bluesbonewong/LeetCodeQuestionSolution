/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
let reverseBetween = function (head, m, n) {
    if (m === n) return head; // 无需翻转

    let vhead = new ListNode(-1, head); // 虚拟头结点
    // 需要三个指针p、q、r来迭代，q指向需要操作的结点
    let cnt = 1, q = vhead, p = null, r = null;

    while (q.next !== null && cnt !== m) {
        q = q.next, cnt++;
    }

    let rhp = q; // reverseHeadPrev
    // 初始化p、q、r
    p = q.next, q = p.next, r = q.next;

    while (cnt !== n) {
        cnt++;
        q.next = p;
        p = q, q = r;
        // r如果为null，说明q是最后一个需要操作的结点，为了防止r报错，直接break
        if (r === null) break;
        else r = r.next;
    }
    rhp.next.next = q;
    rhp.next = p;

    return vhead.next;
};
