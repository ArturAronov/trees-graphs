class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const insertHelper = (node, value) => {
      if (node === null) {
        this.root = new Node(value);
        return this.root;
      }

      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return node.left;
        } else {
          insertHelper(node.left, value);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          this.root = new Node(value);
          return this.root;
        } else {
          insertHelper(node.right, value);
        }
      }
    };

    return insertHelper(this.root, value);
  }

  contains(value) {
    const containsHelper = (node, value) => {
      if (node === null) return null;
      if (node.value === value) return true;
      else if (value < node.value && node.left !== null)
        return containsHelper(node.left, value);
      else if (value > node.value && node.right !== null)
        return containsHelper(node.right, value);

      return false;
    };

    return containsHelper(this.root, value);
  }

  min(value) {}

  max(value) {}

  remove(value) {}

  // left, root, right
  inOrderTraversal(node, func = console.log) {}

  // root, left, right
  preOrderTraversal(node, func = console.log) {}

  // left, right, root
  postOrderTraversal(node, func = console.log) {}
}
