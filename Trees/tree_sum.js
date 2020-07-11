// Iterate through every node in the tree and return its sum

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

    sum() {
        return this._sum(this.root);
    }

    _sum(node) {
        if (node === null) return 0;
        return node.data + this._sum(node.left) + this._sum(node.right);
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

console.log(tree.sum()); // -757