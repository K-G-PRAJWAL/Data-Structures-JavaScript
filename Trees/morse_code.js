// Check out more about this problem: http://www.learnmorsecode.com/

class Node {
    constructor(letter, dash = null, dot = null) {
        this.letter = letter;
        this.dash = dash;
        this.dot = dot;
    }
}

class MorseCodeTree {
    constructor() {
        this.root = new Node(null);
        this.root.dash = new Node("T");
        this.root.dash.dash = new Node("M");
        this.root.dash.dot = new Node("N");

        this.root.dot = new Node("E");
        this.root.dot.dash = new Node("A");
        this.root.dot.dot = new Node("I");
    }

    decode(message) {
        let res = "";
        for (let i = 0; i < message.length; i++) {
            res += this.decodeLetter(this.root, message[i], 0);
        }
        return res;
    }

    decodeLetter(node, str, index) {
        if (node === null) return "";
        else if (index === str.length) return node.letter;
        else if (str.charAt(index) === "-")
            return this.decodeLetter(node.dash, str, index + 1);
        else if (str.charAt(index) === ".")
            return this.decodeLetter(node.dot, str, index + 1);
    }
}

let morse = new MorseCodeTree();
console.log(morse.decode(["--", ".-", "-."]));