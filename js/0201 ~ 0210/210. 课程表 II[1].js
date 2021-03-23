/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
let findOrder = function (numCourses, prerequisites) {
    let edges = [], vis = [], stk = [], tt = -1, valid = false;
    // 邻接表
    for (let i = 0; i < numCourses; i++) edges.push([]);
    for (let [a, b] of prerequisites) edges[b].push(a);

    let dfs = u => {
        vis[u] = 1;

        for (let v of edges[u]) {
            if (valid) return;

            if (vis[v] === undefined) dfs(v);
            else if (vis[v] === 1) {
                valid = true;
                return;
            }
        }

        vis[u] = 2;
        stk[++tt] = u;
    }

    for (let i = 0; i < numCourses; i++) {
        if (vis[i] === undefined) dfs(i);

        if (valid) return [];
    }

    stk.reverse();

    return stk;
};
