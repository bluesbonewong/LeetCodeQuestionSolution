// 1. 双链表存储键值对，实现LRU机制，把使用过的键值对插入表头，这样表尾就是最近最少使用的结点
// 2. 双链表插入、删除都是O(1)的复杂度，很完美
// 3. Map映射双链表的结点的指针

/**
 * @param {number} capacity
 */
let LRUCache = function (capacity) {
    let head = new Node(-1, -1, null), tail = new Node(-1, -1, head, null); // 虚拟头尾结点
    head.next = tail;

    this.head = head;
    this.tail = tail;
    this.capacity = capacity;
    this.m = new Map(); // key: indexPoint
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let {m, head} = this;

    if (m.get(key) === undefined) return -1;

    let idxp = m.get(key);
    move2Head(head, idxp);

    return idxp.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let {m, capacity, head, tail} = this;

    if (m.get(key) === undefined) { // 新插入的结点不在map中
        if (m.size === capacity) { // 内存已满，删除双链表的最后一个元素，和map的映射
            let deleteNode = tail.prev;
            m.delete(deleteNode.key);
            removeNode(deleteNode);
        }

        // 插入
        let node = new Node(key, value);
        m.set(key, node);
        addFromHead(head, node);
    } else { // 新插入的结点已在map中，修改后直接移动到链表头
        let idxp = m.get(key);
        idxp.val = value;
        move2Head(head, idxp);
    }
};

function Node(key, val, prev, next) {
    this.key = (key === undefined ? -1 : key);
    this.val = (val === undefined ? -1 : val);
    this.prev = (prev === undefined ? null : next);
    this.next = (next === undefined ? null : next);
}

// 将对应的结点移动到链表头部(先删除，再头插)
function move2Head(head, idxp) {
    removeNode(idxp);
    addFromHead(head, idxp);
}

function addFromHead(head, idxp) {
    idxp.prev = head;
    idxp.next = head.next;
    head.next = idxp;
    idxp.next.prev = idxp;
}

function removeNode(idxp) {
    idxp.prev.next = idxp.next;
    idxp.next.prev = idxp.prev;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
