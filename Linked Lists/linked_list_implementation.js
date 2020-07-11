class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function display(node) {
    let curr = node;
    while (curr != null) {
        console.log(curr.data);
        curr = curr.next;
    }
}

function sumAll(node) {
    let curr = node;
    let sum = 0;
    while (curr != null) {
        sum += curr.data;
        curr = curr.next;
    }
    console.log(sum);
}

let N1 = new Node(3);
let N2 = new Node(33);
let N3 = new Node(333);
let N4 = new Node(3333);

N1.next = N2;
N2.next = N3;
N3.next = N4;

display(N1); // 3 33 333 3333
sumAll(N1); // 3702