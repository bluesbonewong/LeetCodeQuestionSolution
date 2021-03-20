/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
let getLeastNumbers = function (arr, k) {
    let heap = [], len = 0;

    // 大根堆
    let down = u => {
        let t = u;
        if (2 * u <= len && heap[2 * u] > heap[t]) t = 2 * u;
        if (2 * u + 1 <= len && heap[2 * u + 1] > heap[t]) t = 2 * u + 1;

        if (t !== u) {
            [heap[t], heap[u]] = [heap[u], heap[t]];
            down(t);
        }
    }

    let up = u => {
        let fatherIdx = Math.floor(u / 2);
        if (fatherIdx > 0 && heap[fatherIdx] < heap[u]) {
            [heap[fatherIdx], heap[u]] = [heap[u], heap[fatherIdx]];
            up(fatherIdx);
        }
    }

    // 注意，我们要先插入
    for (let e of arr) {
        // 先插入
        heap[++len] = e;
        up(len);

        // 再删除堆顶
        if (len === k + 1) {
            heap[1] = heap[len--];
            down(1);
        }
    }

    heap = heap.splice(1, len);
    return heap;
};
