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
}

// Tests
// let tree = new binarySearchTree();
// tree.insert(10);
// tree.insert(12);
// tree.insert(7);
// tree.insert(11);
// tree.insert(9);
// tree.insert(5);
// console.log(tree.insert(14));
// console.log(tree.contains(5));