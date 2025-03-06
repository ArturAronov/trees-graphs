class Graph {
  constructor() {
    this.adjList = {};
  }

  addNode(node) {
    this.adjList[node] = [];
  }

  depthFirstTraversal(startingNode, func = console.log) {
    const nodeStack = [];
    const visited = {};

    nodeStack.push(startingNode);
    visited[startingNode] = true;

    while (!!nodeStack.length) {
      const current = nodeStack.pop();
      const neighbors = this.adjList[current];
      func(current);

      neighbors.forEach((neighbor) => {
        if (!visited[neighbor]) {
          nodeStack.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
  }
}
