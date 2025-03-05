class Graph {
  constructor() {
    this.adjList = {};
  }

  addNode(node) {
    this.adjList[node.value] = {
      node: node,
      edges: [],
    };
  }

  addEdge(node1, node2) {
    this.adjList[node1.value].edges.push(node2);
    this.adjList[node2.value].edges.push(node1);
  }

  removeNode(node) {
    Object.values(this.adjList).forEach((adjNode) => {
      adjNode.edges = adjNode.edges.filter((edge) => edge.value !== node.value);
    });

    delete this.adjList[node.value];
  }
}

const adjList = new Graph();
const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 3 };

adjList.addNode(node1);
adjList.addNode(node2);
adjList.addNode(node3);

adjList.addEdge(node1, node2);
adjList.addEdge(node1, node3);
adjList.addEdge(node2, node3);

console.log(JSON.stringify(adjList, null, "  "));

adjList.removeNode(node3);

console.log(JSON.stringify(adjList, null, "  "));
