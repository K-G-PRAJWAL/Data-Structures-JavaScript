class List {
    constructor() {
        this.data = new Array(10);
        this.size = 0;
    }

    // add the value to the first-most free position in the data array
    push(value) {
        if (this.size === this.data.length) {
            this.grow();
        }

        this.data[this.size] = value;
        this.size++;
    }

    grow() {
        // create a new array that's twice as big
        let aa = new Array(this.data.length * 2);
        // copy over every value from the old data array to the larger array
        for (let i = 0; i < this.data.length; i++) {
            aa[i] = this.data[i];
        }
        console.log("growing from", this.data.length, "to", aa.length);
        // set the larger area as the data for the list
        this.data = aa;
        console.log(" str:", this.toString());
        console.log("data:", this.data);
        console.log();
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
console.log(" str:", ll.toString()); // str: []
console.log("data:", ll.data); // data: [ <10 empty items> ]
console.log();

ll.push(42);
console.log(" str:", ll.toString()); // str: [42 ]
console.log("data:", ll.data); // data: [ 42, <9 empty items> ]
console.log();

ll.push(56);
console.log(" str:", ll.toString()); // str: [42 56 ]
console.log("data:", ll.data); // data: [ 42, 56, <8 empty items> ]
console.log();

ll.push(88);
console.log(" str:", ll.toString()); // str: [42 56 88 ]
console.log("data:", ll.data); // data: [ 42, 56, 88, <7 empty items> ]
console.log();

// add 100 numbers so we can see when the list grows
for (let i = 0; i < 100; i++) {
    ll.push(i);
}

// growing from 10 to 20
//  str: [42 56 88 0 1 2 3 4 5 6 ]
// data: [ 42, 56, 88, 0, 1, 2, 3, 4, 5, 6, <10 empty items> ]

// growing from 20 to 40
//  str: [42 56 88 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 ]
// data: [
//   42,
//   56,
//   88,
//   0,
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   <20 empty items>
// ]

// growing from 40 to 80
//  str: [42 56 88 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 ]
// data: [
//   42, 56,               88,
//   0,  1,                2,
//   3,  4,                5,
//   6,  7,                8,
//   9,  10,               11,
//   12, 13,               14,
//   15, 16,               17,
//   18, 19,               20,
//   21, 22,               23,
//   24, 25,               26,
//   27, 28,               29,
//   30, 31,               32,
//   33, 34,               35,
//   36, <40 empty items>
// ]

// growing from 80 to 160
//  str: [42 56 88 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 ]
// data: [
//   42,               56, 88, 0,
//   1,                2,  3,  4,
//   5,                6,  7,  8,
//   9,                10, 11, 12,
//   13,               14, 15, 16,
//   17,               18, 19, 20,
//   21,               22, 23, 24,
//   25,               26, 27, 28,
//   29,               30, 31, 32,
//   33,               34, 35, 36,
//   37,               38, 39, 40,
//   41,               42, 43, 44,
//   45,               46, 47, 48,
//   49,               50, 51, 52,
//   53,               54, 55, 56,
//   57,               58, 59, 60,
//   61,               62, 63, 64,
//   65,               66, 67, 68,
//   69,               70, 71, 72,
//   73,               74, 75, 76,
//   <80 empty items>
// ]