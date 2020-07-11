class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        // Check if queue is empty
        return this.front === null;
    }

    enqueue(value) {
        // add elements to the end of the queue
        let node = new Node(value);
        if (this.isEmpty()) {
            // if the queue is empty make front and rear point to the same first node
            this.front = node;
            this.rear = node;
        } else {
            // make rear point to the new node
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            // if queue is empty nothing to be dequeued
            return null;
        }

        // reference to first element in queue
        let result = this.front.data;

        if (this.front === this.rear) {
            // if only one node left then reset front and rearto null
            this.front = null;
            this.rear = null;
        } else {
            // front is the second element in the queue
            this.front = this.front.next;
        }

        return result;
    }
}

let q = new Queue();
q.enqueue("33");
q.enqueue("-22");
q.enqueue("11");
q.enqueue("90");
q.enqueue("99");
q.enqueue("-101");

while (!q.isEmpty()) {
    console.log(q.dequeue()); // 33 -22 11 90 99 -101
}