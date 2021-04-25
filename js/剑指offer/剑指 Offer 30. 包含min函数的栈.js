/**
 * initialize your data structure here.
 */
let MinStack = function () {
    this.stk = [], this.tt = -1;
    this.mstk = [], this.mtt = -1;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stk[++this.tt] = x;

    if (this.mtt < 0) this.mstk[++this.mtt] = x;
    else {
        let min = Math.min(this.mstk[this.mtt], x);
        this.mstk[++this.mtt] = min;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.tt--, this.mtt--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stk[this.tt];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {

    return this.mstk[this.mtt];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
