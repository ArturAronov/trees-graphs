class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);

    // This return is not a must
    // Returning a node will give you reference to a node, if reference is not needed, the return is not required.
    return newTree;
  }

  removeChild(value) {
    const children = this.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].value === value) {
        children[i] = null;
        return;
      }
    }
  }
}

const myTree = new Tree(1);
// console.log("myTree: ", myTree);

myTree.insertChild(5);
// console.log("myTree: ", myTree);

// Since we are returning newTree in insertChild, we have reference to it, and can perform this action:
const myTree2 = myTree.insertChild(2);
// console.log("myTree2: ", myTree2);

myTree.insertChild(3);
// console.log("myTree: ", myTree);

myTree.removeChild(2);
console.log("myTree: ", myTree);
