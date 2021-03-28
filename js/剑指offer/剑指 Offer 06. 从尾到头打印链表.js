/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */
let reversePrint = function (head) {
    let arr = [], p = head;
    while (p !== null) arr.unshift(p.val), p = p.next;

    return arr;
};
