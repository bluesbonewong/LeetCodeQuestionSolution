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
let insertionSortList = function (head) {
    if (head === null || head.next === null) return head; // 保证链表至少有两个元素

    let vhead = new ListNode(-Number.MAX_VALUE, head);

    let q = vhead, p = head;

    while (p.next !== null) {
        // 重置q
        q = vhead;
        while (q.next !== p.next && q.next.val <= p.next.val) q = q.next;

        // 执行插入
        if (q.next !== p.next) {
            let insertNode = p.next;
            // 先删除insertNode
            p.next = p.next.next;
            // 再插入
            insertNode.next = q.next;
            q.next = insertNode;
        } else {
            // 如果执行了插入，说明p.next被移走，p.next就是下一个待排元素，因此无需更新
            // 插入的话要更新p，因为p.next未被移动，而p.next.next才是待排结点
            p = p.next;
        }
    }

    return vhead.next;
};
