// Write a function to calculate the number of occurrences of all characters in a string
function charCount(str) {
    var ans = {};

    for (var i = 0; i < str.length; i++) {
        if (ans[str[i]] > 0) ans[str[i]]++;
        else ans[str[i]] = 1;
    }
    return ans;
}


console.log(charCount("Hello World !"))


// Improve the above solution to ignore non-alpha-numeric characters & improve the logic to count occurrences
function improvedCharCount(str) {
    var ans = {};

    for (var char of str) {
        if (/[a-z0-9]/.test(char)) { // using regex to ignore non-alpha-numeric characters OR make use of str.charCodeAt(idx) - gives the ASCII value of character
            ans[char] = ans[char] + 1 || 1;
        }
    }

    return ans;
}

console.log(improvedCharCount("Hello World ! Ignore, these@ characters%."))