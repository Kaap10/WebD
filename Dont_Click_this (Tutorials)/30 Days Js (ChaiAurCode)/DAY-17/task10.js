class SimpleNetwork {
    constructor() {
      this.graph = new Graph();
    }
  
    addNode(node) {
      this.graph.addVertex(node);
    }
  
    addConnection(node1, node2) {
      this.graph.addEdge(node1, node2);
    }
  
    findShortestPath(start, end) {
      const visited = new Set();
      const queue = [[start, [start]]];
      while (queue.length > 0) {
        const [vertex, path] = queue.shift();
        if (vertex === end) return path;
        if (!visited.has(vertex)) {
          visited.add(vertex);
          const neighbors = this.graph.adjList.get(vertex);
          for (const neighbor of neighbors) {
            queue.push([neighbor, [...path, neighbor]]);
          }
        }
      }
      return null;
    }
  }
  
  // Example usage
  const network = new SimpleNetwork();
  network.addNode("A");
  network.addNode("B");
  network.addNode("C");
  network.addNode("D");
  network.addConnection("A", "B");
  network.addConnection("A", "C");
  network.addConnection("B", "D");
  network.addConnection("C", "D");
  console.log(network.findShortestPath("A", "D")); // Output: ['A', 'B', 'D']