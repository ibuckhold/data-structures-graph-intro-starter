
class Graph {
  constructor(val) {
    this.val= val;
    this.adjList= new Object();
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex]= [];
    }
    return vertex;
  }

  addEdges(srcValue, destValue) {
    if (!this.adjList[srcValue]) {
      this.addVertex(srcValue);
    }
    if (!this.adjList[destValue]) {
      this.addVertex(destValue);
    }
    this.adjList[srcValue].push(destValue);
    this.adjList[destValue].push(srcValue);
  }

  buildGraph(edges) {
    edges.forEach(pair => {
      let src= this.addVertex(pair[0]);
      let dest= this.addVertex(pair[1]);
      (this.addEdges(src, dest));
    });
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    let visted = [startingVertex]
    let queue = new Queue(this.adjList.length)
    queue.enqueue(startingVertex)
    while (queue.length){
      let currVert = queue.dequeue()
      this.adjList[currVert]
        .filter(v => !visited.includes(v))
        .forEach(v =>{
          visited.push(v)
          queue.enqueue(v)
          })
    }
    return visted
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};
