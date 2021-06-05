class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let node = new Node(val)
    if(this.root === null){
      this.root = node;
    }
    let currentNode = this.root;
    while(currentNode != null){
      if(node.val < currentNode.val){
        if(currentNode.left === null){
          currentNode.left = node
        } else {
          currentNode = currentNode.left
        }//end else
      }else if(node.val > currentNode.val){
        if(currentNode.right === null){
          currentNode.right = node
        } else {
          currentNode = currentNode.right
        } // end else
      }//end if
    } 
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if(this.root === null){
      this.root = new Node(val);
    }
    if(val < current.val){
      if(current.left === null){
        let node = new Node(val);
        current.left = node;
        return this;
      }
      return this.insertRecursively(val, current.left)
    } else {
      if(val > current.val){
        if(current.right === null){
          let node = new Node(val);
          current.right = node;
          return this;
        }
        return this.insertRecursively(val, current.right)
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root

    while(current.val !== val){
      if(val < current.val){
        current = current.left
      } else {
        current = current.right
      } //end else
    }// end while
    return current.val
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(current.val === val){
      return current.val
    }
    if(val < current.val){
      return this.findRecursively(val, current.left)
    } else {
      return this.findRecursively(val, current.right)
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let node = this.root;
    let nodes = [];

    function traverse(n){
      node.push(n.val)
      if(n.left) traverse(n.left);
      if(n.right) traverse(n.right);
    }
    traverse(node);
    return nodes;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let node = this.root;
    let nodes = [];

    function traverse(n){
      if(n.left) traverse(n.left);
      node.push(n.val)
      if(n.right) traverse(n.right);
    }
    traverse(node);
    return nodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let node = this.root;
    let nodes = [];

    function traverse(n){
      if(n.left) traverse(n.left);
      if(n.right) traverse(n.right);
      node.push(n.val);
    }
    traverse(node);
    return nodes;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let currentNode = this.root;
    let queue = []
    let nodesVisited = []

    queue.push(currentNode)

    while(queue.length){
      currentNode = queue.shift()
      nodesVisited.push(currentNode.val)

      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
    }
    return nodesVisited

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
