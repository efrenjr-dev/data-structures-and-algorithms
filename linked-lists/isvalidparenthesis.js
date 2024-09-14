const Stack = require("./stack.js");

const isValidParenthesis = (parenthesisString) => {
    let parenthesisStack = new Stack();
    let parenthesisArray = parenthesisString.split("");
    console.log("array", parenthesisArray);
    parenthesisArray.forEach((character) => {
        if (parenthesisStack.first) {
            if (character === ")" && parenthesisStack.first.value === "(") {
                parenthesisStack.pop();
            } else if (
                character === "}" &&
                parenthesisStack.first.value === "{"
            ) {
                parenthesisStack.pop();
            } else if (
                character === "[" &&
                parenthesisStack.first.value === "]"
            ) {
                parenthesisStack.pop();
            } else {
                parenthesisStack.push(character);
            }
        } else {
            parenthesisStack.push(character);
        }
    });
    console.log(parenthesisStack);
    console.log("stack length", parenthesisStack.length);
    return parenthesisStack.length === 0 ? true : false;
};

const result = isValidParenthesis("");
console.log(result);
