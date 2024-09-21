const merge = (left, right) => {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    result.push(...left.slice(i));
    result.push(...right.slice(j));

    return result;
};

const mergeSort = (array) => {
    if (array.length <= 1) return array;
    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));
    // console.log("left", left);
    // console.log("right", right);
    return merge(left, right);
};

// const myArray1 = [4, 21, 36, 80, 92];
// const myArray2 = [2, 13, 25, 42, 90];
// const result = merge(myArray1, myArray2);
// console.log(result);

const unsortedArray = [4, 21, 2, 13, 25, 42, 9, 36, 80, 92];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
