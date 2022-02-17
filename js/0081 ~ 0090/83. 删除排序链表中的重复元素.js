/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {
  if (!head) return head;

  let start = cur = head;
  while (cur !== null) {
    if (start.val === cur.val) {
      cur = cur.next;
    } else {
      start.next = cur;
      start = cur;
    }
  }

  start.next = cur;

  return head;
};
