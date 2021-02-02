/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

let rotateRight = function (head, k) {
    // 先获得链表总长度，算出实际需要移动的k
    let p = head, n = 0;
    while (p !== null) {
        n++;
        p = p.next;
    }
    k = k % n;

    // 空链表或只有一个元素的链表或者无需移动则直接return
    if (n <= 1 || k === 0) return head;

    // 下面就是链表拼接，p代表新链表尾结点，q来处理后序拼接，cnt代表下标，n - k - 1是新链表尾结点的下标
    p = head;
    let cnt = 0;
    while (cnt < n - k - 1) {
        cnt++;
        p = p.next;
    }

    let q = p.next;
    p.next = null; // 尾结点指向null

    // 拼接链表
    // 此时p代表新链表的头结点
    p = q;
    while (q.next !== null) q = q.next;
    q.next = head;

    return p;
};
