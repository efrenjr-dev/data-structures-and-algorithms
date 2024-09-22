const longestConsecutive = (nums) => {
    let lengthArray = [];
    const numSet = new Set(nums);

    for (const n of nums) {
        if (!numSet.has(n - 1)) {
            let sequenceLength = 1;
            for (let i = 1; numSet.has(n + i); i++) {
                sequenceLength++;
            }
            lengthArray.push(sequenceLength);
        }
    }
    return Math.max(...lengthArray);
};

const input = [2, 20, 4, 10, 3, 4, 5];
const output = longestConsecutive(input);
console.log(output);
