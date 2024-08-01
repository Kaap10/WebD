function treeDepth(root) {
    // Base Case
    if (root === null) {
      return 0;
    }
    // Recursive Relation + Processing
    let leftSubTreeH = treeDepth(root.left);
    let rightSubTreeH = treeDepth(root.right);
    let heightOfBT = Math.max(leftSubTreeH + rightSubTreeH) + 1;
    return heightOfBT;
  }
  
  console.log(treeDepth(root)); // 3