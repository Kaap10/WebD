class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Method 1: to insert values
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        // When root is null, then newNode join to the root node of BT
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            // Join the newNode to left of the current root node
            current.left = newNode;
            return;
          }
          // Update the current root node via left node
          current = current.left;
        } else {
          if (!current.right) {
            // Join the newNode to right of the current root node
            current.right = newNode;
            return;
          }
          // Update the current root node via right node
          current = current.right;
        }
      }
    }
  
    // Method 2: to perform in-order traversal to display nodes (LNR)
    inOrderTraversal(node = this.root) {
      if (node !== null) {
        // L
        this.inOrderTraversal(node.left);
        // N
        console.log(node.value);
        // R
        this.inOrderTraversal(node.right);
      }
    }
  }
  
  // Example usage
  const tree = new BinaryTree();
  tree.insert(5);
  tree.insert(3);
  tree.insert(7);
  tree.insert(2);
  tree.insert(4);
  tree.insert(6);
  tree.insert(8);
  tree.inOrderTraversal();
  // Output: 2 3 4 5 6 7 8