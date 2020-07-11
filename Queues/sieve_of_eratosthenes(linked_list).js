// Learn more about this problem here: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
// return all primes upto n using sieve of eratosthenes and queues.

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

function primes(n) {
    let q = new Queue();
    for (let i = 2; i < n; i++) {
        q.enqueue(i);
    }

    let prime = [];
    let newQ = new Queue();

    while (q.size >= 1) {
        // first number added as prime
        let primeNum = q.dequeue();
        prime.push(primeNum);
        while (q.size > 0) {
            let num = q.dequeue();
            if (num % primeNum !== 0) {
                newQ.enqueue(num);
            }
        }

        // swap the two queues
        let temp = q;
        q = newQ;
        newQ = temp;
    }

    return prime;
}

console.log(primes(100)); // [2,  3,  5,  7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]