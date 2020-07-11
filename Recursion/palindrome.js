// check if a string is palidrome or not using recursion
let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function isPalindrome(s, start = 0, end = null) {
    if (end === null) end = s.length - 1;
    if (s.length < 2) return true;
    else if (end <= start) return true;
    else {
        let c1 = s.charAt(start).toUpperCase();
        let c2 = s.charAt(end).toUpperCase();
        if (!ALPHABET.includes(c1)) {
            return isPalindrome(s, start + 1, end);
        } else if (!ALPHABET.includes(c2)) {
            return isPalindrome(s, start, end - 1);
        } else if (c1 !== c2) {
            return false;
        } else {
            return isPalindrome(s, start + 1, end - 1);
        }
    }
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("bat")); // false
console.log(isPalindrome("Sir, I demand, I am a maid named Iris.")); // true
console.log(isPalindrome("Anne, I vote more cars race Rome-to-Vienna.")); // true
console.log(isPalindrome("Draw, O Caesar, erase a coward.")); // true
console.log(
    isPalindrome(
        "Palindrome examples also exist in phrases or sentences where punctuation, capitals, and spacing are ignored."
    )
); // false