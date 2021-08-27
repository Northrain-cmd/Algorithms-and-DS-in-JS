class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    if(!this.root) {
      this.root = new Node(value);
      return this
    } else {
      let current = this.root;
      while(true) {
        if(value < current.value) {
          if(!current.left) {
            current.left = new Node(value);
            return this
          }
            current = current.left 
        } else if(value > current.value) {
          if(!current.right) {
            current.right = new Node(value);
            return this
          }
            current = current.right
        } else {
          return undefined
        }
      }  
    }
  }

  find(value) {
    if(!this.root) return false
    let current = this.root;
    while (current) {
      if(current.value === value) return current
      if(value < current.value) {
      current = current.left
      } else {
      current = current.right
      }
   }
    return undefined
  }

  contains(value) {
    if(!this.root) return false
    let current = this.root;
    while (current) {
      if(current.value === value) return true
      if(value < current.value) {
      current = current.left
      } else {
      current = current.right
      }
   }
    return false
  }

  breadthFirstTraversal() {
    if(!this.root) return undefined
    let result = [];
    let queue = [this.root];
    while(queue[0]) {
      let cur = queue.shift();
      if(cur.left) queue.push(cur.left);
      if(cur.right) queue.push(cur.right);
      result.push(cur.value);
    }
    return result
  }

  preorderDFS() {
    if(!this.root) return undefined;
    let result = [];
    function traverse(node) {
      result.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  postorderDFS() {
    if(!this.root) return undefined;
    let result = [];
    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }

  inorderDFS () {
    if(!this.root) return undefined;
    let result = [];
    function traverse(node) {
      if(node.left) traverse(node.left);
      result.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
}

// Tests
// let tree = new binarySearchTree();
// tree.insert(10);
// tree.insert(12);
// tree.insert(7);
// tree.insert(11);
// tree.insert(9);
// tree.insert(5);
// tree.insert(15);
// console.log(tree.inorderDFS())
// console.log(tree.insert(14));
// console.log(tree.contains(5));