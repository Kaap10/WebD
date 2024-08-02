class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    // Method 1: to add vertices
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
  
    // Method 2: to add the edges
    addEdge(vertex1, vertex2) {
      if (this.adjList.has(vertex1)) {
        this.adjList.get(vertex1).push(vertex2);
      }
      if (this.adjList.has(vertex2)) {
        this.adjList.get(vertex2).push(vertex1);
      }
    }
  
    // Method 3: to perform a breadth-first search (BFS)
    bfs(start) {
      const visited = new Set();
      const queue = [start];
      while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited.has(vertex)) {
          console.log(vertex);
          visited.add(vertex);
          const neighbors = this.adjList.get(vertex);
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }
    }
  }
  
  // Example usage
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "D");
  graph.bfs("A");
  // Output: A B C D