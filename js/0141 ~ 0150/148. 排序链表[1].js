// https://leetcode-cn.com/problems/sort-list/solution/148-pai-xu-lian-biao-by-bluesbone_wong-b1wj/

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
let sortList = function (head) {
    // 先求链表长度
    let n = 0;
    for (let p = head; p; p = p.next) n++;

    // 大循环，代表趟数的递进
    // 每一趟把长度为i的小区间变成长度为2i的区间
    // 【注意】当i>=n时，说明全部排序已经完成
    for (let i = 1; i < n; i = 2 * i) {
        // 虚拟头结点，用来串接归并完成的区间
        // cur不断向前迭代，将每一趟的结点进行串接
        let dummy = new ListNode(-1), cur = dummy;

        // 小循环，进行二路归并，j每次跳过2i的长度
        // 【注意】j <= n，而不是j < n，因为有尾巴长度不够不能归并的情况，要保留尾巴
        for (let j = 1; j <= n; j += 2 * i) {
            // 让p指向第一段的头结点，q指向第二段的头结点
            let p = head, q = p;
            // &&q对应有尾巴的情况
            for (let k = 0; k < i && q; k++) q = q.next;

            // 预先找到下一个二路归并的起点
            head = q;
            for (let k = 0; k < i && head; k++) head = head.next;

            // 进行二路归并
            let l = 0, r = 0; // l和r计数，防止p或q超出该小段的范围
            while (l < i && r < i && p && q) {
                if (p.val <= q.val) {
                    cur.next = p;
                    cur = cur.next;
                    p = p.next;
                    l++;
                } else {
                    cur.next = q;
                    cur = cur.next;
                    q = q.next;
                    r++;
                }
            }
            // 进行二路归并扫尾
            while (l < i && p) {
                cur.next = p;
                cur = cur.next;
                p = p.next;
                l++;
            }
            while (r < i && q) {
                cur.next = q;
                cur = cur.next;
                q = q.next;
                r++;
            }
            // 每次归并完成后，cur都会指向已归并段的最后一个结点
        }
        // 防止成环
        cur.next = null;
        // 还原head
        head = dummy.next;
    }

    return head;
};
