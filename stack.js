class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    let oldStart = this.first;
    this.first = node;
    this.first.next = oldStart;
    if(!this.last) this.last = node;
    this.size += 1;
    return this.size; 
  }

  pop() {
    if(this.size === 0) return undefined;
    let removed = this.first;
    if(this.size === 1) this.last = null;
    this.first = removed.next;
    this.size -= 1;
    return removed.value;
  }
}