/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 看官方题解，解法二

// 中点是【向下取整】得到的中点
let findMiddle = head => {
    // 快慢指针找链表中点
    let f = head, s = head;
    while (f.next !== null && f.next.next !== null) {
        f = f.next.next, s = s.next;
    }

    return s;
}

// [m.next, tail]这个闭区间都要翻转
let reverseList = head => {
    // 只有一个结点或无结点，无需翻转
    if (head === null || head.next === null) return head;
    let dummy = new ListNode(-1, head);
    let pre = dummy, cur = head, nxt = head.next;
    // 初始化
    cur.next = null;
    while (nxt !== null) {
        pre = cur, cur = nxt, nxt = nxt.next;
        cur.next = pre;
    }

    return cur;
}

let reorderList = function (head) {
    if (head === null) return;
    // 获取链表中点
    let m = findMiddle(head);
    // 让p指向未反转链表的头结点
    let p = head;
    // 获取翻转链表的头指针
    let q = reverseList(m.next);
    // 两个链表之间断开连接
    m.next = null;

    // 直接合并
    while (p !== null && q !== null) {
        let pTmp = p.next, qTmp = q.next;
        p.next = q;
        q.next = pTmp;

        p = pTmp;
        q = qTmp;
    }
};
