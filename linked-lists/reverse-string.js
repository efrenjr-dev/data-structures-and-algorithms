//reverse string using stack
const Stack = require("./stack.js");

const reverseString = (stringValue) => {
    const stack = new Stack();
    let reversedString = "";
    for (let character of stringValue) {
        stack.push(character);
    }
    while (stack.length > 0) {
        reversedString += stack.pop().value;
    }
    return reversedString;
};

const reversedString = reverseString("hello world!");
console.log(reversedString);
