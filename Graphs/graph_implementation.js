class Graph {
    constructor() {
        this.edges = {};
    }

    addNode(node) {
        // Add a vertex to the graph
        if (!this.edges[node]) {
            this.edges[node] = [];
        }
    }

    addBidirectionalEdge(n1, n2) {
        // Add bidirectional edge between two nodes
        this.addEdge(n1, n2);
        this.addEdge(n2, n1);
    }

    addEdge(start, end) {
        // Add an unidirectional edge between two nodes
        this.edges[start].push(end);
    }

    getNeighbours(start) {
        // Get the nodes connected to any node
        return this.edges[start];
    }
}

let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");

g.addBidirectionalEdge("A", "B");
g.addBidirectionalEdge("A", "C");
g.addBidirectionalEdge("B", "C");
g.addBidirectionalEdge("C", "D");
g.addBidirectionalEdge("D", "B");
g.addBidirectionalEdge("D", "E");

console.log(g.getNeighbours("B")); // [ 'A', 'C', 'D' ]