// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/160-xiang-jiao-lian-biao-by-bluesbone_wo-x3n8/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
let getIntersectionNode = function (headA, headB) {
    let p1 = headA, p2 = headB;

    // p1 === p2有两种情况
    // 1. 找到了相交节点
    // 2. 同时为null
    while (p1 !== p2) {
        // 为null说明该指针走到了单链表末尾，应该换方向
        p1 = (p1 === null) ? headB : p1.next;
        p2 = (p2 === null) ? headA : p2.next;
    }

    return p1;
};
