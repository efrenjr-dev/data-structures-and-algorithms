const Stack = require("./stack.js");

const isValidParenthesis = (bracketString) => {
    let bracketStack = new Stack();
    let bracketArray = bracketString.split("");
    console.log("array", bracketArray);
    bracketArray.forEach((character) => {
        if (bracketStack.first) {
            if (character === ")" && bracketStack.first.value === "(") {
                bracketStack.pop();
            } else if (character === "}" && bracketStack.first.value === "{") {
                bracketStack.pop();
            } else if (character === "]" && bracketStack.first.value === "[") {
                bracketStack.pop();
            } else {
                bracketStack.push(character);
            }
        } else {
            bracketStack.push(character);
        }
    });
    console.log(bracketStack);
    console.log("stack length:", bracketStack.length);
    return bracketStack.length === 0 ? true : false;
};

const result1 = isValidParenthesis("{])}");
console.log(result1); // false
const result2 = isValidParenthesis("{([])}");
console.log(result2); // true
