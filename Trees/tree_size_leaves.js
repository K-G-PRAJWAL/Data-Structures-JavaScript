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

    size() {
        // return total number of nodes in tree
        return this._size(this.root);
    }

    _size(node) {
        if (node === null) return 0;
        return 1 + this._size(node.left) + this._size(node.right);
    }

    leaves() {
        // return the total number of leaf nodes in the tree
        return this._leaves(this.root);
    }

    _leaves(node) {
        if (node === null) return 0;
        if (node.left === null && node.right === null) return 1;
        return this._leaves(node.left) + this._leaves(node.right);
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

console.log(tree.size()); // 6
console.log(tree.leaves()); // 2