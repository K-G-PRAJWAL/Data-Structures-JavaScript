// check if an element exists in the tree or not

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

    contains(value) {
        return this._contains(this.root, value);
    }

    _contains(node, value) {
        if (node === null) return false;
        else if (node.data === value) return true;
        return (
            this._contains(node.left, value) || this._contains(node.right, value)
        );
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

console.log(tree.contains(-12)); // true
console.log(tree.contains(-11)); // false