/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
let deleteNode = function (head, val) {
    if (head.val === val) return head.next;

    let p = head;
    while (p !== null) {
        if (p.next.val === val) {
            p.next = p.next.next;
            break;
        }

        p = p.next;
    }

    return head;
};
