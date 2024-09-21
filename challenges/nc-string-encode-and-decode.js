const encode = (strs) => {
    let encodedString = "";
    for (const word of strs) {
        encodedString = encodedString.concat(word.length, "#", word);
    }
    return encodedString;
};

const decode = (str) => {
    let decodedString = [];
    let wordLength = 0;
    let i = 0;
    let j = 0;

    while (i < str.length) {
        while (str[j] !== "#") {
            j++;
        }
        wordLength = parseInt(str.substring(i, j), 10);

        i = j + 1;
        j += wordLength + 1;

        decodedString.push(str.substring(i, j));
        i = j;
    }

    return decodedString;
};

const input = [
    "",
    "   ",
    "!@#$%^&*()_+",
    "LongStringWithNoSpaces",
    "Another, String With, Commas",
];

const encoded = encode(input);
const output = decode(encoded);
console.log(encoded);
console.log(output);
