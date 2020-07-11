class List {
    constructor() {
        this.arr = new Array(5);
        this.size = 0;
    }

    method() {
        console.log("Hello World!");
    }

    push(value) {
        this.arr[this.size] = value;
        this.size++;
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            console.log(this.arr[i]);
        }
    }
}

const l = new List();
l.method();
l.push(6);
l.push(9);
l.display(); // 6 9