/* Queues */

function Queue() {
  let collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    collection.push(element);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
}
/* 
let q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print(); */

/* Priority Queue */

function PriorityQueue() {
  let collection = [];
  this.printCollection = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          //checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function() {
    var value = collection.shift();
    return value[0];
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
}

let pq = new PriorityQueue();
pq.enqueue(["Virat Kohli", 2]);
pq.enqueue(["Rohit Sharma", 3]);
pq.enqueue(["MS Dhoni", 1]);
pq.enqueue(["KL Rahul", 2]);
pq.enqueue(["Ravi Jadeja", 4]);
pq.enqueue(["Hardik Pandya", 5]);
pq.enqueue(["J Bumrah", 6]);
// pq.printCollection();
// console.log(pq.dequeue());
// console.log(pq.front());
pq.printCollection();
