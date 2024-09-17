const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && current < array[j]) {
            array[j + 1] = array[j];
            j--;

            console.log(array);
        }
        array[j + 1] = current;
    }
    return array;
};

const myArray = [4, 2, 6, 5, 1, 3];
const result = insertionSort(myArray);
console.log(result);
