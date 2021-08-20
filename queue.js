class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enq(value) {
    let node = new Node(value);
    if(!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let oldLast = this.last;
      oldLast.next = node;
      this.last = node;
    }
    this.size += 1;
    return this.size;
  }

  deq() {
    if(this.size === 0) return undefined
    let removed = this.first;
    this.first = removed.next;
    if(this.size === 1) this.last = null;
    this.size -= 1;
    return removed.value
  }
}

// Tests
// let q = new Queue();
// q.enq(1);
// q.enq(2);
// q.enq(3);
// q.enq(4);
// console.log(q.deq());
// console.log(q.deq());
// console.log(q.deq());
// console.log(q.deq());
// console.log(q.deq());
