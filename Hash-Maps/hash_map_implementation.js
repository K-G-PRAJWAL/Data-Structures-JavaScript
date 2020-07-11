class HashMap {
    constructor() {
        this.buckets = new Array(10);
    }

    hash(str) {
        // return the sum of all letters in the string by their alphabetical index value
        str = str.toLowerCase();
        const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += ALPHABET.indexOf(str.charAt(i));
        }
        return sum;
    }

    hashCode(key) {
        // this is a hash function that returns the modulus of the string sum by the bucket length
        let val = this.hash(key) % this.buckets.length;
        return val;
    }

    put(key, value) {
        // place the value in the hash map
        let index = this.hashCode(key);
        this.buckets[index] = value;
    }

    get(key) {
        // get value of a key from hash map
        let index = this.hashCode(key);
        return this.buckets[index];
    }

    remove(key) {
        // remove the value of a key from hash map
        let index = this.hashCode(key);
        this.buckets[index] = null;
    }
}

let h = new HashMap();
h.put("Apples", 22);
h.put("Oranges", 11);
h.put("Pineapples", 16);
h.put("Grapes", 19);
console.log(h.get("Apples")); // 16
console.log(h.get("GRAPES")); // 19
console.log(h.get("Banana")); // undefined