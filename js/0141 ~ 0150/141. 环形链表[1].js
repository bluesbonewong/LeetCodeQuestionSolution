// https://leetcode-cn.com/problems/linked-list-cycle/solution/141-huan-xing-lian-biao-by-bluesbone_won-vsw6/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function (head) {
    if (head === null || head.next === null) return false;

    let fast = head.next.next, slow = head;

    while (fast !== slow) {
        if (fast === null || fast.next === null) return false;
        fast = fast.next.next;
        slow = slow.next;
    }

    return true;
};
