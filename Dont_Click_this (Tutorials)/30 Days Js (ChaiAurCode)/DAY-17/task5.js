class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(value) {
      this.items.push(value);
    }
  
    dequeue() {
      if (this.items.length === 0) return null;
      return this.items.shift();
    }
  
    front() {
      if (this.items.length === 0) return null;
      return this.items[0];
    }
  }
  
  // Example usage
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.front()); // 1
  console.log(queue.dequeue()); // 1
  console.log(queue.dequeue()); // 2
  console.log(queue.dequeue()); // 3
  console.log(queue.dequeue()); // null