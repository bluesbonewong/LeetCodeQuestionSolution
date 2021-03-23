/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let canFinish = function (numCourses, prerequisites) {
    let edges = []; // 边表
    let vis = []; // undefined - 未搜索，1 - 搜索中，2 - 搜索完成
    let stk = [], tt = -1; // 栈
    let valid = false; // 是否有环
    // 初始化
    for (let i = 0; i < numCourses; i++) edges.push([]);
    // 建立邻接表
    for (let [a, b] of prerequisites) edges[b].push(a);

    let dfs = u => {
        // 将节点标记为「搜索中」
        vis[u] = 1;
        // 搜索其相邻节点
        // 只要发现有环，立刻停止搜索
        for (let v of edges[u]) {
            if (valid) return;

            if (vis[v] === undefined) { // 如果「未搜索」那么搜索相邻节点
                dfs(v);
            } else if (vis[v] === 1) { // 如果「搜索中」说明找到了环
                valid = true;
                return;
            }
        }

        vis[u] = 2; // 将节点标记为已完成
        stk[++tt] = u; // 入栈
    }

    // 每次挑选一个「未搜索」的节点，开始进行深度优先搜索
    for (let i = 0; i < numCourses; i++) {
        if (vis[i] === undefined) dfs(i);
    }

    return !valid;
};
