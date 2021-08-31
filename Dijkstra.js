const PriorityQueue = require('./priorityQueue');
const Graph = require('./WeightedGraph');

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

function shortestPath(graph, start, end) {
  const adjList = graph.adjList;
  const path = [];
  const distances = {};
  const previous = {};
  const queue = new PriorityQueue;
  for(let key in adjList) {
    if(key === start) {
      distances[key] = 0;
      queue.enq(key, 0);
    } else {
      distances[key] = Infinity;
      queue.enq(key, Infinity);
    }
    previous[key] = null;  
  }

  while(queue.values.length) {
    let vertex = queue.deq().value;
    if(vertex === end ) {
      while(previous[vertex]) {
        path.push(previous[vertex]);
        vertex = previous[vertex];
      }
      path.unshift(end);
      break;
    } 
    adjList[vertex].forEach(neighbor =>  {
      let distance = distances[vertex] + neighbor.weight;
      if(distance < distances[neighbor.node]) {
        distances[neighbor.node] = distance;
        previous[neighbor.node] = vertex;
        queue.enq(neighbor.node, distance);
      }
    })
  }
  return path.reverse();
}

// Test
// console.log(shortestPath(graph,"A", "E"));

