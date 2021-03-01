/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 对于逆序处理，首先应该考虑栈
let addTwoNumbers = function (l1, l2) {
    let stka = [], tta = -1, stkb = [], ttb = -1;

    // 入栈
    while (l1 !== null) stka[++tta] = l1.val, l1 = l1.next;
    while (l2 !== null) stkb[++ttb] = l2.val, l2 = l2.next;

    // 虚拟头结点
    let dummy = new ListNode(-1);
    let t = 0; // 存储进位
    // add
    while (tta >= 0 || ttb >= 0) {
        if (tta >= 0) t += stka[tta--];
        if (ttb >= 0) t += stkb[ttb--];

        // 头插法
        let node = new ListNode(t % 10);
        node.next = dummy.next;
        dummy.next = node;

        t = Math.floor(t / 10);
    }

    if (t > 0) {
        let node = new ListNode(t);
        node.next = dummy.next;
        dummy.next = node;
    }

    return dummy.next;
};
