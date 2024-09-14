const twoSum = (numbersArray, targetSum) => {
    for (let i = 0; i < numbersArray.length; i++) {
        for (let j = i + 1; j < numbersArray.length; j++) {
            if (targetSum === numbersArray[i] + numbersArray[j]) {
                return [i, j];
            }
        }
    }
    return "No two numbers have the target as sum";
};

const res = twoSum([2, 7, 11, 15], 9);
const res2 = twoSum([2, 7, 11, 15], 10);
console.log(res);
console.log(res2);
