// Learn more about this problem here: https://en.wikipedia.org/wiki/Josephus_problem
// josephus function takes in an array of choices and an integer n.
// Cycle through this array in a way such that every time the nth number is met, it is eliminated.
// Continue this process until only one element remains in the array and return it.

// Queue using Linked List
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
        this.size = 0;
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
        this.size++;
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
        this.size--;

        return result;
    }
}

function josephus(choices, n) {
    let q = new Queue();

    // adding choices to the queue
    for (let choice of choices) {
        q.enqueue(choice);
    }

    q.enqueue(q.dequeue());

    let count = 1;
    while (q.size > 1) {
        let choice = q.dequeue();
        if (count % n !== 0) {
            q.enqueue(choice);
        }
        count++;
    }
    return q.dequeue();
}

let choices = "ABCDEF".split("");
console.log(josephus(choices, 3)); // B