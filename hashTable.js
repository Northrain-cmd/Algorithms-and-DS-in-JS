class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
      let code = key.charCodeAt(i) - 96;
      total = (total * prime + code) % this.keyMap.length;
    }
    return total
  }

  set(key,value) {
    let index = this._hash(key);
    if(!this.keyMap[index]) this.keyMap[index] = [];
    for(let arr of this.keyMap[index]) {
        if(arr[0] === key) {
          arr[1] = value;
          return 
        }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if(!this.keyMap[index]) return undefined;
    for(let array of this.keyMap[index]) {
      if(array[0] === key) return array[1]
    }
  }

  keys() {
    let result = [];
    this.keyMap.forEach(array => {
      for(let pair of array) {
        result.push(pair[0]);
      }
    })
    return result
  }

  values() {
    let result = [];
    this.keyMap.forEach(array => {
      for(let pair of array) {
        if(!result.includes(pair[1]))
        result.push(pair[1]);
      }
    })
    return result
  }
}

//Tests
// let hash =  new HashTable(10);
// hash.set('pink','#ffaa00');
// hash.set('pink','#ffaa55');
// hash.set('orangered','#ff5588');
// hash.set('blue','#1166ff');
// hash.set('red','#ff0000');
// hash.set('cyan','#0000ff');
// hash.set('yellow','#aaeeff');
// console.log(hash.set('yellow','#bbeeff'));
// hash.get('yellow');
// hash.get('pink');
// hash.get('blue');
// hash.get('cyan');
// console.log(hash.values());

