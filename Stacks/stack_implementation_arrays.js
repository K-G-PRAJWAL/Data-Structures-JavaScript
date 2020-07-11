class ArrayStack {
    constructor() {
        this.data = new Array(10);
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(value) {
        if (this.data.length === this.size) {
            this.grow();
        }
        this.data[this.size] = value;
        this.size++;
    }

    pop() {
        let result = this.data[this.size - 1];
        this.data[this.size - 1] = null;
        this.size--;
        return result;
    }

    peek() {
        return this.data[this.size - 1];
    }

    size() {
        return this.size;
    }

    grow() {
        let data = new Array(this.data.length * 2);
        for (let i = 0; i < this.data.length; i++) {
            data[i] = this.data[i];
        }
        this.data = data;
    }
}

let sl = new ArrayStack();
sl.push(1);
sl.push(32);
sl.push(122);
sl.push(9012);
while (!sl.isEmpty()) {
    let val = sl.pop();
    console.log(val); // 9012 122 32 1
}