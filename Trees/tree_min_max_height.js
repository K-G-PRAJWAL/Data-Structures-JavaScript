class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    min() {
        // return smallest value in tree
        return this._min(this.root);
    }

    _min(node) {
        if (node === null) return 0;
        let leftMin = this._min(node.left);
        let rightMin = this._min(node.right);
        if (node.data < leftMin && node.data < rightMin) {
            return node.data;
        } else if (leftMin < rightMin) return leftMin;
        else return rightMin;
    }

    max() {
        // return biggest value in tree
        return this._max(this.root);
    }

    _max(node) {
        if (node === null) return 0;
        let leftMax = this._max(node.left);
        let rightMax = this._max(node.right);
        if (node.data > leftMax && node.data > rightMax) {
            return node.data;
        } else if (leftMax > rightMax) return leftMax;
        else return rightMax;
    }

    height() {
        //return height of tree
        return this._height(this.root);
    }

    _height(node) {
        if (node === null) {
            return null;
        }
        let leftHeight = this._height(node.left);
        let rightHeight = this._height(node.right);
        if (leftHeight > rightHeight) return 1 + leftHeight;
        else return 1 + rightHeight;
    }
}

let t1 = new Node(12);
let t2 = new Node(-12);
let t3 = new Node(121);
let t4 = new Node(122);
let t5 = new Node(112);
let t6 = new Node(-1112);

let tree = new Tree();
tree.root = t1;
t1.left = t2;
t1.right = t3;
t3.right = t4;
t4.left = t5;
t5.left = t6;

/*
    12
   /  \
  12  121
        \
         112
          \
           -1112
*/

console.log("Minimum: ", tree.min()); // -1112
console.log("Maximum: ", tree.max()); // 122
console.log("Maximum: ", tree.height()); // 5