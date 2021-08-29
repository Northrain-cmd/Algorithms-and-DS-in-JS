 class WeightedGraph {
  constructor() {
      this.adjList = {}
  }

  addVertex(name) {
    if(!this.adjList[name]) this.adjList[name] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if(this.adjList[vertex1] && this.adjList[vertex2]) {
      this.adjList[vertex1].push({
        node: vertex2, 
        weight 
        });
      this.adjList[vertex2].push({
        node: vertex1,
        weight
        });    
    }
  }

  removeEdge(vertex1, vertex2) {
    if(this.adjList[vertex1] && this.adjList[vertex2]) {
      let index1 = this.adjList[vertex1].findIndex(obj => obj.node === vertex2);
      this.adjList[vertex1].splice(index1, 1);
      let index2 = this.adjList[vertex2].findIndex(obj => obj.node === vertex1);
      this.adjList[vertex2].splice(index2, 1);
    }
  } 

  removeVertex(name) {
    if(this.adjList[name]) {
      for(let i = this.adjList[name].length - 1; i >= 0; i--) {
        const connection = this.adjList[name][i].node;
        this.removeEdge(name, connection);
      }
      delete this.adjList[name];
    }
  }

  DFSrecursive(vertex) {
    const result = [];
    const visited = {};
    const traverse = (vertex) => {
      if(!vertex) return undefined;
      result.push(vertex);
      visited[vertex] = true;
      this.adjList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) return traverse(neighbor)
      });
    }
    traverse(vertex);
    return result;
  }

  DFSiterative(vertex) {
     const result = [];
     const visited = {};
     visited[vertex] = true;
     const stack = [vertex];
     while(stack.length) {
       let current = stack.pop();
       result.push(current);
        this.adjList[current].forEach(el => { 
          if(!visited[el]) {
           stack.push(el);
           visited[el] = true;
          }
        }); 
       } 
     return result
  }

  BFS(vertex) {
    const result = [];
    const visited = {};
    const queue = [vertex];
    visited[vertex] = true;
    while(queue.length) {
      console.log(queue);
      const current = queue.pop();
      result.push(current);
      this.adjList[current].forEach(el => {
        if(!visited[el]) {
          queue.unshift(el);
          visited[el] = true;
        }
      })
    } 
    return result
  }
}

module.exports = WeightedGraph;

// Tests
// let g = new WeightedGraph();
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addVertex("F");

// g.addEdge("A", "B",4);
// g.addEdge("A", "C",2);
// g.addEdge("B","E", 3);
// g.addEdge("C","D", 2);
// g.addEdge("C","F", 4);
// g.addEdge("D","E", 3);
// g.addEdge("D","F", 1);
// g.addEdge("E","F", 1);
// g.removeVertex("A");
// console.log(g.adjList);
// console.log(g.BFS("A")); 
// console.log(g.adjList);