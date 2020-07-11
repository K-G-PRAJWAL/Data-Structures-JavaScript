function containsDuplicates(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return true;
            }
        }
    }
    return false;
}

function isPalindrome(str) {
    let index = 0;
    while (index < str.length / 2) {
        let c1 = str[0];
        let c2 = str[str.length - index];
        if (c1 !== c2) {
            return false;
        }
    }
    return true;
}

console.log(containsDuplicates("madam")); // true
console.log(isPalindrome("racecar")); // false