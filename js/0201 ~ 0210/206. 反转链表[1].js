/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function (head) {
    let pre = null, cur = head;

    while (cur !== null) {
        let nxt = cur.next;
        cur.next = pre;
        pre = cur, cur = nxt;
    }

    return pre;
};
