let CQueue = function () {
    this.stk1 = [], this.tt1 = -1;
    this.stk2 = [], this.tt2 = -1;
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    // 插入就直接往栈1插
    this.stk1[++this.tt1] = value;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.tt2 === -1) {
        // 两个栈都空
        if (this.tt1 === -1) return -1;

        // 栈1 -> 栈2
        while (this.tt1 !== -1) this.stk2[++this.tt2] = this.stk1[this.tt1--];
    }

    // 出栈
    return this.stk2[this.tt2--];
};
/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
