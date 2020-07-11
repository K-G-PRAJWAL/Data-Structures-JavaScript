// Check if the given parantheses series is balanced or not

function peek(stack) {
    return stack[stack.length - 1];
}

function check(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);
        if (letter === "(") {
            stack.push("(");
        } else if (letter === ")") {
            if (stack.length === 0) {
                return false;
            } else if (peek(stack) === "(") {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(check("(((())))")); // true
console.log(check("()()()())")); // false
console.log(check("(()()()(())))")); // false
console.log(check("(")); // false
console.log(check(")")); // false