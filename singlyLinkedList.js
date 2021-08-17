class Node {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if(this.head === null){
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length += 1;
    return this
  }

  pop() {
    if(this.length === 0) return undefined
    let prev = this.head;
    let current = prev;
    while( current.next !== null ) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length -= 1;
    if(this.length === 0) {
      this.head = null;
      this.tail = null
    }
    return current;
  }

  unshift(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if(this.tail === null) this.tail = newNode;
    this.length += 1;
    return this
  }

  shift() {
    if(this.length === 0) return undefined
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length -= 1;
    if(this.length === 0) this.tail = null
    return oldHead;
  }

  get(index) {
    if(index < 0 || index >= this.length ) return undefined
    let i = 0;
    let current = this.head;
    while(i < index) {
      current = current.next;
      i+=1;
    }
    return current
  }

  set(index, value) {
    let node = this.get(index);
    if(node) node.value = value;
    return node || false
  }

  insert(index, value) {
    if(index < 0 || index > this.length) return false
    if(index === 0) return !!this.unshift(value);
    if(index === this.length) return !!this.push(value);
    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let rightNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = rightNode;
    this.length += 1;
    return true
  }

  remove(index) {
    if(index < 0 || index >= this.length) return undefined
    if(index === this.length - 1) return this.pop();
    if(index === 0) return this.shift();
    let leftNode = this.get(index - 1);
    let removed = leftNode.next;
    leftNode.next = removed.next;
    this.length -= 1;
    return removed
  }

  reverse() {
    if(this.length === 0) return this
    let current = this.head.next;
    let left = this.head;
    left.next = null;
    this.tail = left;
    while(current) {
      let oldNext = current.next;
      current.next = left;
      left = current;
      current = oldNext;
    }
    this.head = left;
    return this
  }

  traverse() {
    let current = this.head;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Tests
let list = new SinglyLinkedList();
list.push("Hello");
list.push("There");
list.push("General");
list.push("Kenobi");
list.reverse();
list.traverse()
