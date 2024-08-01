//in-order traversal

class TreeNode{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrder(root){
    if(root=== null) return;

    inOrder(root.left);
    console.log(root.value);
    inOrder(root.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
inOrder(root);
