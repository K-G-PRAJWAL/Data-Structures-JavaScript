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

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            this._insert(this.root, value);
        }
    }

    _insert(node, value) {
        if (value < node.data && node.left === null) {
            node.left = new Node(value);
        } else if (value > node.data && node.right === null) {
            node.right = new Node(value);
        } else if (value < node.data) {
            this._insert(node.left, value);
        } else {
            this._insert(node.right, value);
        }
    }

    collect() {
        return this._collect(this.root, []);
    }

    _collect(node, result) {
        if (node === null) {
            return result;
        }

        result.push(node.data);
        this._collect(node.left, result);
        this._collect(node.right, result);
        return result;
    }

    contains(value) {
        // Check if an element exists in the BST
        return this._contains(this.root, value);
    }

    _contains(node, value) {
        if (node === null) return false;
        if (node.data === value) return true;
        if (value < node.data) return this._contains(node.left, value);
        if (value > node.data) return this._contains(node.right, value);
    }
}

let tree = new Tree();
tree.insert(43);
tree.insert(13);
tree.insert(23);
tree.insert(29);
tree.insert(115);
tree.insert(52);
tree.insert(102);
tree.insert(2);

console.log(tree.contains(52)); // true
console.log(tree.contains(152)); // false