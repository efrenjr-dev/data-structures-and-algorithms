const arrayChunk = (sourceArray, chunkSize) => {
    let modifiedArray = [];
    let chunkArray = [];
    let j = 0;
    for (let i = 0; i < sourceArray.length; i++) {
        if (j < chunkSize) {
            chunkArray.push(sourceArray[i]);
            j++;
            if (i === sourceArray.length - 1) {
                modifiedArray.push(chunkArray);
            }
        } else {
            modifiedArray.push(chunkArray);
            chunkArray = [];
            chunkArray.push(sourceArray[i]);
            if (i === sourceArray.length - 1) {
                modifiedArray.push(chunkArray);
            }
            j = 1;
        }
    }
    return modifiedArray;
};

const sampleArray = [1, 2, 3, 4, 5];
console.log(arrayChunk(sampleArray, 3));
