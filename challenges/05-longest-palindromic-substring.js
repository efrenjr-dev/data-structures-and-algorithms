var longestPalindrome = function (s) {
    if (!s) return undefined;
    const spreadFromCenter = (stringValue, left, right) => {
        while (
            left >= 0 &&
            right < stringValue.length &&
            stringValue[left] === stringValue[right]
        ) {
            left--;
            right++;
        }
        return right - left - 1;
    };

    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        let odd = spreadFromCenter(s, i, i);
        let even = spreadFromCenter(s, i, i + 1);
        let palindromeLength = Math.max(odd, even);
        if (palindromeLength > end - start) {
            start = i - Math.floor((palindromeLength - 1) / 2);
            end = i + Math.floor(palindromeLength / 2);
        }
    }
    return s.substring(start, end + 1);
};

// const sampleString1 = "abb";
// const sampleString2 = "cbbd";
// const result1 = longestPalindrome(sampleString1);
// const result2 = longestPalindrome(sampleString2);
// console.log(result1);
// console.log(result2);
