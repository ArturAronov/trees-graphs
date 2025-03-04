class BinaryTree {
  constructor(question) {
    this.question = question;
    this.yes = null; // this is a child, can also be left
    this.no = null; // this is a child, can also be right
  }

  traverse(func) {
    func(this.question);
    if (this.yes) this.yes.traverse(func);
    if (this.no) this.no.traverse(func);
  }

  contains(question) {
    if (this.question === question) return true;

    // if (this.yes) return this.yes.contains(this.question);
    // if (this.no) return this.no.contains(this.question);

    return (
      (this.yes && !!this.yes.contains(question)) ||
      (this.no && !!this.no.contains(question))
    );
  }
}

// const myTree = new BinaryTree();
// myTree.traverse(console.log);

// console.log(myTree);

/* 

                        Do you feel like cooking
                        /                      \
                    (Yes)                     (No)
                Do you have milk         Do you have toast
                                        /
                                    (Yes)
                            Do you like butter
*/
