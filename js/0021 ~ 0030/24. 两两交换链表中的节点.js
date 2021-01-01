function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let swapPairs = function (head) {
    if (head === null) return head; // 排除掉无结点的情况

    let headNode = new ListNode(-1); // 虚拟头结点
    headNode.next = head;
    let prv = headNode, nxt = prv.next.next;

    while (nxt !== null) {
        prv.next.next = nxt.next;
        nxt.next = prv.next;
        prv.next = nxt;
        // 更新prv和nxt
        prv = prv.next.next;
        if (prv.next === null) break;
        nxt = prv.next.next;
    }

    return headNode.next;
};

