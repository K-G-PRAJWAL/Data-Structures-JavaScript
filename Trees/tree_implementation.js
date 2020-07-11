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

    collect() {
        // return the value at every node
        return this._collect(this.root, []);
    }

    _collect(curr, result = []) {
        // recursion
        if (curr === null) return result;
        result.push(curr.data);
        this._collect(curr.left, result);
        this._collect(curr.right, result);
        return result;
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

console.log(tree.collect());