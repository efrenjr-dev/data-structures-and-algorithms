const capitalizeSentence = (sentence) => {
    let sentenceArray = sentence.toLowerCase().split(" ");

    let capitalizedArray = sentenceArray.map((word) => {
        let wordArray = word.split("");
        wordArray[0] = wordArray[0].toUpperCase();
        return wordArray.join("");
    });

    return capitalizedArray.join(" ");
};

console.log(capitalizeSentence("hello world"));
