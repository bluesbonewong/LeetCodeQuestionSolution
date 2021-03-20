/**
 * initialize your data structure here.
 */
let MinStack = function() {
    this.stk = [];
    this.tt = -1;
    this.min_stk = [Infinity];
    this.mtt = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stk[++this.tt] = x;

    this.min_stk[++this.mtt] = Math.min(x, this.min_stk[this.mtt - 1]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.tt--, this.mtt--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stk[this.tt];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min_stk[this.mtt];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
