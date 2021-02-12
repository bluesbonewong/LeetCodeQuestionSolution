/**
 * Initialize your data structure here.
 */
let MyQueue = function () {
    this.stk1 = [];
    this.tt1 = -1;
    this.stk2 = [];
    this.tt2 = -1;
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    // stk2 -> stk1
    while (this.tt2 !== -1) {
        this.stk1[++this.tt1] = this.stk2[this.tt2--];
    }

    // x -> stk1
    this.stk1[++this.tt1] = x;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // stk1 -> stk2
    while (this.tt1 !== -1) {
        this.stk2[++this.tt2] = this.stk1[this.tt1--];
    }

    // pop
    return this.stk2[this.tt2--];
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // stk1 -> stk2
    while (this.tt1 !== -1) {
        this.stk2[++this.tt2] = this.stk1[this.tt1--];
    }

    // pop
    return this.stk2[this.tt2];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.tt1 === -1 && this.tt2 === -1;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
