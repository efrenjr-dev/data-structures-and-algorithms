class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            return false;
        }
        this.adjacencyList[vertex] = [];
        return true;
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            //check if vertices exist
            return false;
        }
        for (let neighbor of this.adjacencyList[vertex1]) {
            //check for duplicate edges
            if (neighbor === vertex2) return false;
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return true;
    }
    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            //check if vertices exist
            return false;
        }
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (vertex) => vertex !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (vertex) => vertex !== vertex1
        );
        return true;
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return undefined;
        }

        for (let neighbor of this.adjacencyList[vertex]) {
            this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
                (vtx) => vtx !== vertex
            );
        }
        delete this.adjacencyList[vertex];
        return this;
    }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "C");
g.addEdge("C", "A");
g.addEdge("B", "A");
// g.removeEdge("A", "B");
g.removeVertex("B");
console.log(g);
