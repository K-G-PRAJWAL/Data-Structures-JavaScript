// accepts an array and returns the total of the differences of each value in the array.
// input: [2, 6, 12, 19] , output: (4 + 6 + 7) -> 17
function sumDelta(arr) {
    let total = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let v1 = arr[i];
        let v2 = arr[i + 1];
        let delta = Math.abs(v1 - v2);
        total += delta;
    }
    return total;
}

console.log(sumDelta([])); // 0
console.log(sumDelta([9])); // 0
console.log(sumDelta([9, 12])); // 3
console.log(sumDelta([2, 6, 12, 19])); // 17