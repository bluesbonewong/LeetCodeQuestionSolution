/**
 * @param {number[]} height
 * @return {number}
 */

// https://leetcode-cn.com/problems/trapping-rain-water/solution/trapping-rain-water-by-ikaruga/

let trap = function (height) {
    let stk = [], tt = -1; // 栈记录的是柱子下标

    let sum = 0;
    for (let i = 0; i < height.length; i++) {
        // 入栈情况：如果栈空 || 当前元素 <= 栈顶元素
        if (tt < 0 || height[i] <= height[stk[tt]]) {
            stk[++tt] = i;
            continue;
        }

        // 出栈并且计算 面积 = 水坑高度 * 水坑宽度
        while (tt >= 0 && height[i] > height[stk[tt]]) {
            let bottom = height[stk[tt--]]; // 栈顶元素出栈，这个是水坑底部

            // 如果栈空，说明左侧无柱子了，不用再计算，因为无法形成水坑
            if (tt < 0) break;

            let w = i - stk[tt] - 1; // 水坑宽度
            let h = Math.min(height[i], height[stk[tt]]) - bottom; // 水坑高度 = 两个柱子较矮的一个 - 水坑底部
            sum += w * h;
            console.log(w, h);
        }

        // 再把当前元素直接入栈
        stk[++tt] = i;
    }

    return sum;
};
