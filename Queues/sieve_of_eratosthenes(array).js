// Learn more about this problem here: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
// return all primes upto n using sieve of eratosthenes and arrays.

function primes(n) {
    let A1 = [];
    let A2 = [];
    for (let i = 2; i < n; i++) {
        A1.push(i);
    }

    let prime = [];

    while (A1.length >= 1) {
        // first number added as prime
        let primeNum = A1.shift();
        prime.push(primeNum);
        while (A1.length > 0) {
            let num = A1.shift();
            if (num % primeNum !== 0) {
                A2.push(num);
            }
        }

        // swap the two arrays
        let temp = A1;
        A1 = A2;
        A2 = temp;
    }

    return prime;
}

console.log(primes(40)); // [2, 3, 5 ,7 ,11, 13, 17, 19, 23, 29, 31, 37]