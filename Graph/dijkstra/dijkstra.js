/**
 * Get nearest not visited node
 * @param {<Record<string, number>} distances distances to each node
 * @param {Record<string, boolean>} visited list of visited nodes
 * @returns {string} nearest node
 */
const findNearestNode = (distances, visited) => {
    let currentNode = null;
    let currentDistance = Infinity;

    Object.entries(distances).forEach(([node, distance]) => {
        if (distance < currentDistance && !visited[node]) {
            currentDistance = distance;
            currentNode = node;
        }
    });

    return currentNode;
}

/**
 * Calc nearest distance to each node
 * @param {Record<string, Record<string, number>>} graph graph with distances
 * @param {string} start start position
 * @returns { distances: Record<string, number>; prev: Record<string, string> } distance and parent  to each node
 */
export const dijkstra = (graph, start) => {
    const visited = {};
    const distances = {};
    const prev = {};

    Object.keys(graph).forEach((node) => {
        distances[node] = Infinity;
    });

    distances[start] = 0;

    let node = findNearestNode(distances, visited);

    while (node) {
        const distance = distances[node];

        Object.entries(graph[node] || {}).forEach(([neighborNode, distanceToNeighbor]) => {
            const neighborDistance = distance + distanceToNeighbor;

            if (distances[neighborNode] > neighborDistance) {
                distances[neighborNode] = neighborDistance;
                prev[neighborNode] = node;
            }
        });

        visited[node] = true;
        node = findNearestNode(distances, visited);
    }

    return { distances, prev };
}

// console.log(dijkstra({
//     a: { b: 6, c: 2 },
//     b: { d: 1 },
//     c: { b: 3, d: 5 },
//     d: {}
// }, 'a')); // {"distances":{"a":0,"b":5,"c":2,"d":6},"prev":{"b":"c","c":"a","d":"b"}}