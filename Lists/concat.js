class List {
    constructor() {
        this.data = new Array(10);
        this.size = 0;
    }

    // a simple method that returns the value at the specified index
    get(index) {
        if (index < this.size) {
            return this.data[index];
        }
        return null;
    }

    // overwrites the value at the specified index
    set(index, value) {
        if (index >= 0 && index < this.size) {
            this.data[index] = value;
        }
    }

    // add the value to the first-most free position in the data array
    push(value) {
        if (this.size === this.data.length) {
            this.grow();
        }

        this.data[this.size] = value;
        this.size++;
    }

    // remove an element at specified index
    remove(removeIndex) {
        if (this.size === 0) {
            return null;
        }

        // save the value that was at the index
        let removed = this.data[removeIndex];
        // scoot all values after over left by one
        for (let i = removeIndex; i < this.size - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        // manually overwrite the now-stale data
        this.data[this.size - 1] = null;

        // decrement the size to show one item was removed
        this.size--;
        // return the value of the removed item
        return removed;
    }

    grow() {
        // create a new array that's twice as big
        let aa = new Array(this.data.length * 2);
        // copy over every value from the old data array to the larger array
        for (let i = 0; i < this.data.length; i++) {
            aa[i] = this.data[i];
        }
        // set the larger area as the data for the list
        this.data = aa;
    }

    add(index, value) {
        if (this.size === this.data.length) {
            this.grow();
        }

        for (let i = this.size; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = value;
        this.size++;
    }

    contains(value) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === value) {
                return true;
            }
        }
        return false;
    }

    concat(other) {
        let result = new List();
        for (let i = 0; i < this.size; i++) {
            result.push(this.get(i));
        }
        for (let i = 0; i < other.size; i++) {
            result.push(other.get(i));
        }
        return result;
    }

    toString() {
        if (this.size === 0) {
            return "[]";
        } else {
            let result = "";
            for (let i = 0; i < this.size; i++) {
                result += this.data[i] + " ";
            }
            return "[" + result + "]";
        }
    }
}

const ll = new List();
ll.push(5);
ll.push(8);
ll.push(12);
ll.push(13);
ll.push(19);

const l2 = new List();
ll.push(23);
ll.push(24);
ll.push(25);

const l3 = ll.concat(l2);
console.log(l3.get(0) === 5); // true
console.log(l3.get(1) === 8); // true
console.log(l3.get(2) === 12); // true
console.log(l3.get(3) === 13); // true
console.log(l3.get(4) === 19); // true
console.log(l3.get(5) === 23); // true
console.log(l3.get(6) === 24); // true
console.log(l3.get(7) === 25); // true