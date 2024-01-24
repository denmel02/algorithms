import { Queue } from "../../DataStructure/index.js"

/**
 * Check can move from start to end
 * @param {Record<string, string[]>} graph graph
 * @param {string} start start value
 * @param {string} end end value
 * @returns {boolean} flag can move from start to end
 */
export const breadthFirstSearch = (graph, start, end) => {
    const queue = new Queue();
    const visitedNodes = new Set();

    if (graph[start]) {
        graph[start].forEach((childNode) => {
            visitedNodes.add(childNode);
            queue.enqueue(childNode);
        });
    }

    while(queue.isNotEmpty) {
        const node = queue.dequeue();

        if (node === end) {
            return true;
        }

        if (graph[node]) {
            graph[node].forEach((childNode) => {
                if (!visitedNodes.has(childNode)) {
                    visitedNodes.add(childNode);
                    queue.enqueue(childNode);
                }
            });
        }
    }

    return false;
}

// console.log(breadthFirstSearch({'1': ['2', '3'], '3': ['4']}, '1', '4')); // true
// console.log(breadthFirstSearch({'1': ['2', '3'], '2': ['5'], '3': ['4']}, '2', '4')); // false