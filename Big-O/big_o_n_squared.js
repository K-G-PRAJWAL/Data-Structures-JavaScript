class ArrayList {
    constructor() {
        this.data = new Array(20);
        this.size = 0;
    }

    // O(1) constant time
    size() {
        return this.size;
    }

    // O(1) constant time
    append(value) {
        this.data[this.size] = value;
        this.size++;
    }

    // O(N) linear time
    removeAtIndex(index) {
        for (let i = index; i < this.size - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.data[this.size - 1] = null;
        this.size--;
    }

    // O(N^2) quadratic time
    containsDuplicates() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (i !== j && this.data[i] === this.data[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}