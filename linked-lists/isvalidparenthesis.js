const Stack = require("./stack.js");

const isValidParenthesis = (bracketString) => {
    let bracketStack = new Stack();
    let bracketMap = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    for (const character of bracketString) {
        if (bracketMap[character]) {
            bracketStack.push(bracketMap[character]);
        } else {
            if (character !== bracketStack.pop().value) {
                return false;
            }
        }
    }
    return bracketStack.length === 0;
};

const result1 = isValidParenthesis("{])}");
console.log(result1); // false
const result2 = isValidParenthesis("{([])}");
console.log(result2); // true
