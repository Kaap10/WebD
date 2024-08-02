class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method 1: to add a node to the end of the linked list
    add(value) {
      const newNode = new Node(value);
      if (!this.head) {
        // When head is null, then newNode join to the next of head
        this.head = newNode;
      } else {
        // When head is not null, then newNode join to the next of tail
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Method 2: to remove a node from the end of the linked list
    remove() {
      if (!this.head) return null;
  
      if (!this.head.next) {
        const value = this.head.value;
        this.head = null;
        return value;
      }
  
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
  
      const value = current.next.value;
      current.next = null;
      return value;
    }
  
    // Method 3: to display all nodes of the linked list
    display() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Example usage
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.display(); // 1 2 3
  console.log(list.remove()); // 3
  list.display(); // 1 2