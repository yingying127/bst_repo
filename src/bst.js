class BinarySearchTree {
  // YOUR CODE HERE
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }
  insert(node) {
    if(node < this.value) {
      if (this.left) {
        this.left.insert(node)
      } else {
        this.left = new BinarySearchTree(node)
      }
    } else {
      if (this.right) {
        this.right.insert(node)
      } else {
        this.right = new BinarySearchTree(node)
      }
    }
  }
  size() {

  }
  contains() {

  }
  depthFirstForEach() {

  }
  breadthFirstForEach() {
    
  }
}

module.exports = BinarySearchTree
