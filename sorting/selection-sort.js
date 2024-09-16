const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array);
        let min = i;
        let temp = array[i];
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
};

const myArray = [4, 2, 6, 5, 1, 3];
const result = selectionSort(myArray);
console.log(result);
