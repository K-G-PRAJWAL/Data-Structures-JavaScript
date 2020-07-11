// Given an expression the program must check if the brackets in the expression is balanced or not

function peek(stack) {
    return stack[stack.length - 1];
}

function isBalanced(str) {
    let OPENING = "({[";
    let CLOSING = ")}]";
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);
        if (OPENING.includes(letter)) {
            stack.push(letter);
        } else if (CLOSING.includes(letter)) {
            if (stack.length === 0) {
                return false;
            } else {
                let top = peek(stack);
                if (OPENING.indexOf(top) === CLOSING.indexOf(letter)) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
}

// true cases
console.log("true cases:");
console.log(isBalanced("()"));
console.log(isBalanced("foo(aa[i], {bar: [0,12]})"));
console.log();

// false cases
console.log("false cases:");
console.log(isBalanced("("));
console.log(isBalanced(")"));
console.log(isBalanced(")("));
console.log(isBalanced("(()"));
console.log(isBalanced("())"));
console.log(isBalanced("foo(3 * ((1 + 4) / 2)"));