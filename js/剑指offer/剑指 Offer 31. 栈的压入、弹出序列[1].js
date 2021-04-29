/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

// 这里主要利用了出栈序列的一个性质：（以下的比较都是对idx的比较）
// 假设入栈序列为[....ai....]，出栈序列为[..ai......]
// 对出栈序列中的ai的后续元素来说，比ai的入栈序列idx小的元素的idx必然是单调递减的

let validateStackSequences = function (pushed, popped) {
    let map = {}, n = popped.length;

    for (let i = 0; i < n; i++) map[pushed[i]] = i;

    for (let i = 0; i < n; i++) {
        let targetIdx = map[popped[i]], stk = [], tt = -1;
        for (let j = i + 1; j < n; j++) {
            let curIdx = map[popped[j]]; // 当前数字idx
            if (curIdx < targetIdx) {
                if (tt > -1 && curIdx > stk[tt]) return false;

                stk[++tt] = curIdx;
            }
        }
    }

    return true;
};
