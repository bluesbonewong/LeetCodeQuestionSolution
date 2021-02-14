/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let getKthFromEnd = function (head, k) {
    let vh = new ListNode(-1);
    vh.next = head;
    let f = s = vh;

    // 让s前进k
    for (let i = 0; i < k; i++) s = s.next;

    // f和s一起前进
    while (s !== null) {
        f = f.next, s = s.next;
    }

    return f;
};
