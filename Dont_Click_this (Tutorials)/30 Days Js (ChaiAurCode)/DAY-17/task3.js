class Stack {
    constructor() {
      this.items = [];
    }
  
    push(value) {
      this.items.push(value);
    }
  
    pop() {
      if (this.items.length === 0) return null;
      return this.items.pop();
    }
  
    peek() {
      if (this.items.length === 0) return null;
      return this.items[this.items.length - 1];
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.peek()); // 3
  console.log(stack.pop()); // 3
  console.log(stack.pop()); // 2
  console.log(stack.pop()); // 1
  console.log(stack.pop()); // null