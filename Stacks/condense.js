// Given a random sequence of numbers, condense it in such a way that if two identical number appears together, remove them and continue the process

// Method 1
function inefficientCondense(sequence) {
    let isDirty = true;

    while (isDirty) {
        isDirty = false;
        let nextSequence = "";
        for (let i = 0; i < sequence.length - 1; i++) {
            let c1 = sequence.charAt(i);
            let c2 = sequence.charAt(i + 1);
            if (c1 !== c2) {
                nextSequence += c1;
            } else {
                isDirty = true;
                i++;
            }
        }

        if (
            sequence.charAt(sequence.length - 2) !==
            sequence.charAt(sequence.length - 1)
        ) {
            nextSequence += sequence.charAt(sequence.length - 1);
        }
        sequence = nextSequence;
    }

    return sequence;
}

// Method 2
function efficientCondense(sequence) {
    sequence = sequence.split("");
    let stack = [sequence.pop()];

    while (sequence.length > 0) {
        let left = sequence.pop();
        let right = stack.pop();

        if (left !== right) {
            stack.push(right);
            stack.push(left);
        }
    }
    while (stack.length > 0) {
        sequence.push(stack.pop());
    }

    return sequence.join("");
}

let sequence = "54322346";
console.log("Inefficient Condense: ", inefficientCondense(sequence));
console.log("Efficient Condense: ", efficientCondense(sequence));