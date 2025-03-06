class Graph {
  constructor() {
    this.adjList = {};
  }

  addNode(node) {
    this.adjList[node] = [];
  }

  breathFirstTraversal(startingNode, func = console.log) {
    const queue = [];
    const visited = {};

    queue.push(startingNode);
    visited[startingNode] = true;

    while (!!queue.length) {
      const current = queue.shift();
      const neighbors = this.adjList;
      func(current);

      neighbors.forEach((neighbor) => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
  }
}
