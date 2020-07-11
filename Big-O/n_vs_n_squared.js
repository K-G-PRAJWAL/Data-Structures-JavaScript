class ArrayList {
    constructor() {
        this.data = new Array(20);
        this.size = 0;
    }

    // O(1) constant time
    length() {
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

    fill(size) {
        for (let i = 0; i < size; i++) {
            this.append(Math.random());
        }
    }
}

function measureTime(func, length, reportResults = true) {
    let start = process.hrtime();
    func();
    let diff = process.hrtime(start);

    if (reportResults) {
        console.log(length, diff[1] + "ms");
    }
}

let a1000 = new ArrayList();
let a2000 = new ArrayList();
let a3000 = new ArrayList();
let a4000 = new ArrayList();
let a5000 = new ArrayList();
a1000.fill(1000);
a2000.fill(2000);
a3000.fill(3000);
a4000.fill(4000);
a5000.fill(5000);

for (let i = 0; i < 10; i++) {
    timeEverything(false);
}
timeEverything(true);

function timeEverything(reportResults) {
    // call the O(N) removeAtIndex method
    if (reportResults) {
        console.log("O(1) size()");
    }
    measureTime(() => a1000.length(), 1000, false);
    measureTime(() => a1000.length(), 1000, reportResults); // 1000 699ms
    measureTime(() => a2000.length(), 2000, reportResults); // 2000 3501ms
    measureTime(() => a3000.length(), 3000, reportResults); // 3000 2500ms
    measureTime(() => a4000.length(), 4000, reportResults); // 4000 2699ms
    measureTime(() => a5000.length(), 5000, reportResults); // 5000 2499ms

    // call the O(N) removeAtIndex method
    if (reportResults) {
        console.log();
        console.log("O(N) remove(0)");
    }
    measureTime(() => a1000.removeAtIndex(0), 1000, false);
    measureTime(() => a1000.removeAtIndex(0), 1000, reportResults); // 1000 3699ms
    measureTime(() => a2000.removeAtIndex(0), 2000, reportResults); // 2000 9401ms
    measureTime(() => a3000.removeAtIndex(0), 3000, reportResults); // 3000 11700ms
    measureTime(() => a4000.removeAtIndex(0), 4000, reportResults); // 4000 14400ms
    measureTime(() => a5000.removeAtIndex(0), 5000, reportResults); // 5000 23601ms

    // call the O(N) removeAtIndex method
    if (reportResults) {
        console.log();
        console.log("N^2 containsDuplicates()");
    }
    measureTime(() => a1000.containsDuplicates(), 1000, false);
    measureTime(() => a1000.containsDuplicates(), 1000, reportResults); // 1000 3194899ms
    measureTime(() => a2000.containsDuplicates(), 2000, reportResults); // 2000 16664001ms
    measureTime(() => a3000.containsDuplicates(), 3000, reportResults); // 3000 39625001ms
    measureTime(() => a4000.containsDuplicates(), 4000, reportResults); // 4000 69413300ms
    measureTime(() => a5000.containsDuplicates(), 5000, reportResults); // 5000 104809300ms
}