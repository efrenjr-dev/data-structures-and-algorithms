const bubbleSort = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            console.log(array);
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
};

const myArray = [4, 2, 6, 5, 1, 3];
const result = bubbleSort(myArray);
console.log(result);
