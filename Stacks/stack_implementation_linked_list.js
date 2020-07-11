class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        return this.top === null;
    }

    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop() {
        let result = this.top;
        this.top = this.top.next;
        this.size--;
        return result.data;
    }

    peek() {
        return this.top.data;
    }

    size() {
        return this.size;
    }
}

let sl = new LinkedListStack();
sl.push(1);
sl.push(32);
sl.push(122);
sl.push(9012);
while (!sl.isEmpty()) {
    let val = sl.pop();
    console.log(val); // 9012 122 32 1
}