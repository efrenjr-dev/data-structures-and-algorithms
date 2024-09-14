let sampleObject = { value: 0, next: null };

let newObject = sampleObject;

newObject.value = 9;
console.log(sampleObject === newObject);
