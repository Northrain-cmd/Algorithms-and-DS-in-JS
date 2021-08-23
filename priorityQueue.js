class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

 swap = (arr,a,b) => {
    [arr[a],arr[b]] = [arr[b],arr[a]];
  }

  enq(value, priority) {
    this.values.push(new Node(value, priority));
    let index = this.values.length - 1;
    while(index > 0) {
       let parentIndex = Math.floor((index - 1) / 2);
       let parent = this.values[parentIndex];
       if(priority >= parent.priority) break;
       this.swap(this.values, index, parentIndex);
       index = parentIndex;
    }
    return this.values;
  }

  deq() {
    const max = this.values[0];
    const value = this.values.pop();
    if(this.values.length === 0) return value;
    this.values[0] = value;
    let index = 0;
    while(index * 2 + 1 < this.values.length) {
      let leftChildIdx = index*2 + 1; 
      let rightChildIdx = index*2 + 2;
      let left = this.values[leftChildIdx];
      let right = this.values[rightChildIdx];
      if(right === undefined) right = {priority: Infinity}; 
      if(left.priority >= value.priority &&
         right.priority >= value.priority) break;
      let swapIndex = right.priority > left.priority ?
                      leftChildIdx : rightChildIdx;
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = value;
      index = swapIndex;
    }
    return max; 
  }
}

// Tests
// let ER = new PriorityQueue();
// ER.enq("Flew",3);
// ER.enq("Cold", 2);
// ER.enq("Gunshot",1);
// ER.enq("Couhging", 3);
// ER.enq("Heart Stroke", 0);
// ER.enq("Stomach pain", 2);
// ER.enq("Advice", 4);
// console.log(ER.values);
// ER.deq();
// console.log(ER.values);
// ER.deq();
// console.log(ER.values);
// ER.deq();
// console.log(ER.values);
// ER.deq();
// console.log(ER.values);
// ER.deq();
// console.log(ER.values);
// ER.deq();
// console.log(ER.values);
// ER.deq();
// console.log(ER.values);




