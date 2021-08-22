class maxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    while(index > 0) {
       let parentIndex = Math.floor((index - 1) / 2);
       let parent = this.values[parentIndex];
       if(value <= parent) break;
       this.values[index] = parent;
       this.values[parentIndex] = value;
       index = parentIndex;
    }
    return this.values;
  }

  extractMax() {
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
      if(right === undefined) right = -Infinity; 
      if(left <= value && right <= value) break;
      let swapIndex = right > left ? rightChildIdx : leftChildIdx;
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = value;
      index = swapIndex;
    }
    return max; 
  }
}

// Tests
// let heap = new maxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);
// console.log(heap.values);
// heap.extractMax();
// console.log(heap.values);
// heap.extractMax();
// console.log(heap.values);
// heap.extractMax();
// console.log(heap.values);
// heap.extractMax();
// console.log(heap.values);
// heap.extractMax();
// console.log(heap.values);
// heap.extractMax();
// console.log(heap.values);
// heap.extractMax();
// console.log(heap.values);




