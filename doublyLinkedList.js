class Node {
  constructor(value, prev = null, next = null) {
    this.prev = prev;
    this.next = next;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.prev.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this
  }

  pop() {
    if(this.length === 0) return undefined
    let oldTail = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      oldTail.prev = null;
      this.tail.next = null; 
    }
    this.length -= 1;
    return oldTail;
  }

  shift() {
    if(this.length === 0) return undefined
    let oldHead = this.head;
    if(this.length === 1) {
    this.head = null;
    this.tail = null;
    } else {
    this.head = this.head.next;
    oldHead.next = null;
    this.head.prev = null; 
    }
    this.length -= 1;
    return oldHead;
  }

  unshift(value) {
    let newHead = new Node(value);
    if(!this.head) {
      this.tail = newHead;
      this.head = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length += 1;
    return this
  }

  get(index) {
    if(index >= this.length || index < 0) return undefined
    let counter = 0;
    let startFromTail = index > this.length / 2;
    let current = this.head;
    if(startFromTail) {
      current = this.tail;
      index = this.length - 1 - index;
    }
    while(counter < index) {
      if(startFromTail) {
        current = current.prev;
      } else {
        current = current.next;
      }
      counter += 1;
    }
    return current
  }

  set(index, value) {
    let node = this.get(index);
    if(node) {
      node.value = value;
      return true
    }
    return false
  }

  insert(index, value) {
    if(index > this.length || index < 0) return false
    if(index === 0) return !!this.unshift(value);
    if(index === this.length) return !!this.push(value);
    let prevNode = this.get(index - 1);
    let rightNode = prevNode.next;
    let newNode = new Node(value);
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = rightNode;
    rightNode.prev = newNode;
    this.length += 1;
    return true
  }

  remove(index) {
    if(index >= this.length || index < 0) return false
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    let prevNode = this.get(index - 1);
    let nodeToDelete = prevNode.next;
    let afterNode = nodeToDelete.next;
    prevNode.next = afterNode, afterNode.prev = prevNode;
    nodeToDelete.prev = null, nodeToDelete.next = null;
    this.length -= 1;
    return nodeToDelete;
  }
}