/*  //Example Tree
const tree = {
  value: 8,
  left: {
    value: 7,
    right: {},
    left: {}
  },
  right: {
    value: 9,
    right: {},
    left: {}
  }
}*/

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

// Tree traversal - обход дерева (посещение каждого узла)
//Depth-first search (DFS) - поиск по дереву в глубину
//Breadth First Traversal (Or Level Order Traversal) - поиск в ширину (по уровням)

/*
Inorder Traversal (Left-Root-Right)
Preorder Traversal (Root-Left-Right)
Postorder Traversal (Left-Right-Root)
*/

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  preOrder(node, callback) {
    if (!node) return;

    if (callback) {
      callback(node);
    }

    this.preOrder(node.left, callback);
    this.preOrder(node.right, callback);
  }

  inOrder(node, callback) {
    if (!node) return;

    this.inOrder(node.left, callback);
    if (callback) {
      callback(node);
    }
    this.inOrder(node.right, callback);
  }

  postOrder(node, callback) {
    if (!node) return;

    this.postOrder(node.left, callback);
    this.postOrder(node.right, callback);

    if (callback) {
      callback(node);
    }
  }

  traverseDFS(callback, method) {
    if (method === 'preOrder') {
      return this.preOrder(this.root, callback);
    }

    if (method === 'inOrder') {
      return this.inOrder(this.root, callback);
    }

    return this.postOrder(this.root, callback);
  }

  traverseBFS() {}

}

const myTree = new BinaryTree();
myTree.add(8);
myTree.add(7);
myTree.add(9);
myTree.add(5);
myTree.add(10);
myTree.add(20);
myTree.add(6);
myTree.add(2);
myTree.add(11);
//console.log(myTree);

/*
myTree.traverseDFS((node) => {
  console.log(node.value);
}, 'preOrder');
*/

/*
myTree.traverseDFS((node) => {
  console.log(node.value);
}, 'inOrder');
*/

myTree.traverseDFS((node) => {
  console.log(node.value);
}, 'postOrder');
