const reverseString = (word) => {
    return word.split("").reverse().join("");
};

const isPalindrome = (word) => {
    return word === reverseString(word);
};

console.log(isPalindrome("abcba"));
