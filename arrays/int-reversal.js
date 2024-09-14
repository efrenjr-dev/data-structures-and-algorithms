const reverseString = (word) => {
    return word.split("").reverse().join("");
};

const reverseInt = (num) => {
    return parseInt(reverseString(num.toString())) * Math.sign(num);
};

console.log(reverseInt(-1234));
