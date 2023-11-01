// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//[1,2,3,4,5]
class BinarySearchTree {

  constructor() {
    // Your code here 
    this.root = null 
  }

  insert(val, currentNode=this.root) {
    // Your code here 
    if(!this.root) {
      this.root = new TreeNode(val)
      return
    }

    if (val < currentNode.val){
      if (!currentNode.left){
        currentNode.left = new TreeNode(val)
      }else{
        this.insert(val, currentNode.left)
      }
    }else if(val > currentNode.val){
      if (!currentNode.right){
        currentNode.right = new TreeNode(val)
      }else {
        this.insert(val, currentNode.right)
      }
    }
  
  }

  search(val, currentNode = this.root) {
    // Your code here 
    if(!currentNode) return false  

    if (currentNode.val === val){
      return true 
    }

    if(val < currentNode.val){
      if (currentNode.left){
        return this.search(val, currentNode.left)
      }
    }else {
      return this.search(val, currentNode.right)
    }

   return false 
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here 
    if(!currentNode) return null 
    console.log(currentNode.val)

    if (currentNode.left){
      this.preOrderTraversal(currentNode.left)
    }

    if(currentNode.right){
      this.preOrderTraversal(currentNode.right)
    }

  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here 
    if(!currentNode) return null 

    if (currentNode.left){
      this.inOrderTraversal(currentNode.left)
    }
    console.log(currentNode.val)

    if(currentNode.right){
      this.inOrderTraversal(currentNode.right)
    }

  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here 
    if(!currentNode) return null 

    if(currentNode.left){
      this.postOrderTraversal(currentNode.left)
    }
    
    if(currentNode.right){
      this.postOrderTraversal(currentNode.right)
    }

    console.log(currentNode.val)
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here 
    let node = this.root 

    let queue = [node]
    while(queue.length){
      let currentNode = queue.shift()
    
      console.log(currentNode.val)
   
      if (currentNode.left){
        queue.push(currentNode.left)
      }

      if (currentNode.right){
        queue.push(currentNode.right)
      }

    }


  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here 
    let node = this.root 
    let stack = [node]
    while(stack.length){
      let currentNode = stack.pop()
      console.log(currentNode.val)

      if (currentNode.left) stack.push(currentNode.left)
      if (currentNode.right) stack.push(currentNode.right)

    }
  }
}


module.exports = { BinarySearchTree, TreeNode };
