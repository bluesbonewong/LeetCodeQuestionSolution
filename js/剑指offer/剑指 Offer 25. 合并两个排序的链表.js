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
let mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(-1), cur = dummy, p = l1, q = l2;

    while (p !== null && q !== null) {
        if (p.val < q.val) {
            cur.next = p;
            p = p.next;
        } else {
            cur.next = q;
            q = q.next;
        }

        cur = cur.next;
    }

    if (p !== null) cur.next = p;
    if (q !== null) cur.next = q;

    return dummy.next;
};
