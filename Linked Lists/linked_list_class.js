class ListNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    isEmpty() {
        return this.root === null;
    }

    prepend(data) {
        let node = new ListNode(data);
        node.next = this.root;
        this.root = node;
        this.size++;
    }

    toString() {
        let result = "root -> ";
        let current = this.root;
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        return result + "null";
    }

    length() {
        let current = this.root;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    get(index) {
        let curr = this.root;
        let count = 0;
        while (curr != null) {
            if (count === index) {
                return curr.data;
            }
            count++;
            curr = curr.next;
        }
        return null;
    }

    remove(index) {
        if (index < 0) return;
        if (index === 0) {
            this.removeFront();
        } else if (index <= this.size - 1) {
            this.removeRest(index);
        }
        this.size--;
    }

    removeFront() {
        if (this.root !== null) {
            this.root = this.root.next;
        }
    }

    removeRest(index) {
        let curr = this.root;
        let i = 0;
        while (curr !== null && i < index - 1) {
            i++;
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }

    add(index, value) {
        if (index === 0) {
            this.prepend(value);
        } else {
            let curr = this.root;
            let i = 0;
            while (curr != null && i < index) {
                i++;
                curr = curr.next;
            }
            let node = new ListNode(value);
            node.next = curr.next;
            curr.next = node;
        }
        this.size++;
    }
}

let list = new LinkedList();
console.log(list.toString()); // root -> null
console.log(list.length()); // 0
list.prepend(5);
list.prepend(4);
list.prepend(3);
list.prepend(2);
list.prepend(1);
console.log(list.toString()); // root -> 1 -> 2 -> 3 -> 4 -> 5 -> null
console.log(list.length()); // 5
console.log("List at 3 is: ", list.get(3)); // List at 3 is:  4

let l2 = new LinkedList();
for (let i = 10; i >= 0; i--) {
    l2.prepend(i);
}
console.log(l2.toString()); // root -> 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> null
l2.remove(7);
console.log(l2.toString()); // root -> 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null
l2.remove(0);
console.log(l2.toString()); // root -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null
l2.remove(l2.length() - 1);
console.log(l2.toString()); // root -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 8 -> 9 -> null
l2.add(0, -1011);
l2.add(2, -111);
l2.add(4, 1011);
l2.add(5, 999);
console.log(l2.toString()); // root -> -1011 -> 1 -> 2 -> -111 -> 3 -> 1011 -> 999 -> 4 -> 5 -> 6 -> 8 -> 9 -> null