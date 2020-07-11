class Graph {
    constructor() {
        this.edges = {};
    }

    addNode(node) {
        if (!this.edges[node]) {
            this.edges[node] = [];
        }
    }

    addBidirectionalEdge(n1, n2) {
        this.addEdge(n1, n2);
        this.addEdge(n2, n1);
    }

    addEdge(start, end) {
        this.edges[start].push(end);
    }

    getNeighbours(start) {
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

// BFS
function breadthFirstTraversal() {
    let x = ["A"]; // starting node array
    let visited = {}; // keep track of the visited nodes
    while (x.length > 0) {
        let node = x.shift(); // dequeue a node
        console.log(node);
        visited[node] = true; // mark that node as visited
        for (let neighbour of g.getNeighbours(node)) {
            // loop through all of its neighbours
            if (!visited[neighbour]) {
                //  as long as they are not visited
                x.push(neighbour); // push them to the array
                visited[neighbour] = true;
            }
        }
    }
}

// DFS
function depthFirstTraversal() {
    let x = ["A"]; // starting node array
    let visited = {}; // keep track of the visited nodes
    while (x.length > 0) {
        let node = x.pop(); // dequeue a node
        console.log(node);
        visited[node] = true; // mark that node as visited
        for (let neighbour of g.getNeighbours(node)) {
            // loop through all of its neighbours
            if (!visited[neighbour]) {
                //  as long as they are not visited
                x.push(neighbour); // push them to the array
                visited[neighbour] = true;
            }
        }
    }
}

breadthFirstTraversal(); // [A, B, C, D, E]
console.log();
depthFirstTraversal(); // [A, C, D, E, B]