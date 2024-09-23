const reverseString = (word) => {
    return word.split("").reverse().join("");
};

const isPalindrome = (word) => {
    return word === reverseString(word);
};

const isPalindromeSentence = (s) => {
    function isSpecialCharacter(char) {
        const regex = /^[a-zA-Z0-9]$/;
        return !regex.test(char);
    }

    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        while (l < r && isSpecialCharacter(s[l])) {
            l++;
        }
        while (l < r && isSpecialCharacter(s[r])) {
            r--;
        }
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            console.log("l", s[l], "r", s[r]);
            return false;
        }
        l++;
        r--;
    }

    return true;
};

// console.log(isPalindrome("abcba"));
// console.log(isPalindromeSentence("Was it a car or a cat I saw?"));
console.log(isPalindromeSentence(".,"));
