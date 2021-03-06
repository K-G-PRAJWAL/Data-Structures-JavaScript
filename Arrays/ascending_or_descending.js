// return true if the given array contains the given value
function contains(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

console.log(contains([], 67)); // false
console.log(contains([14, 55, 67, 88], 67)); // true
console.log(contains([14, 55, 67, 88], 66)); // false

// returns true if the array is sorted in ascending order
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

console.log("isSorted");
// sorted is true
console.log(isSorted([]));
console.log(isSorted([1]));
console.log(isSorted([1, 2]));
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 1, 1, 1, 1]));

// sorted is false
console.log(isSorted([1, 2, 4, 3, 5]));
console.log(isSorted([2, 1, 3, 4, 5]));
console.log(isSorted([1, 2, 3, 5, 4]));