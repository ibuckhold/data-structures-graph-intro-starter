
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
    let visited = [startingVertex]
    let queue = new Array()
    queue.push(startingVertex)
    while (queue.length) {
      let currVert = queue.shift();
      this.adjList[currVert].filter(v => !visited.includes(v)).forEach(v =>{
          visited.push(v)
          queue.push(v)
          })
    }
    return visited
  }

  depthFirstTraversalIterative(startingVertex) {
    let vertexes= [];
    let visited= new Set;
    if (startingVertex) {
      let stack= [];
      stack.push(startingVertex)
      while (stack.length !== 0) {
        let item= stack.pop();
        if (visited.has(item)) {
          continue;
        }
        visited.add(item);
        vertexes.push(item);
        let children= this.adjList[item];
        for (let i=0; i<=children.length-1; i++) {
            stack.push(children[i]);
        }
      }
    }
    return vertexes;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    if (visited.has(startingVertex)) return;
    visited.add(startingVertex)
    vertices.push(startingVertex);
    let children= this.adjList[startingVertex];
    children.forEach((child) => {
      this.depthFirstTraversalRecursive(child, visited, vertices);
    })
    return vertices;
  }
};

module.exports = {
  Graph
};
