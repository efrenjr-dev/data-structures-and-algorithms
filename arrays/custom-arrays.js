class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        // let newData = {};
        // for (let i = 0; i < this.length - 1; i++) {
        //     newData[i] = this.data[i];
        // }
        // this.data = newData;
        // this.length--;
        // return this.length;

        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift() {
        const firstItem = this.data[0];
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    deleteByIndex(index) {
        if (index >= this.length || index < 0) {
            return "Index does not exist in the array";
        }

        const deletedItem = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return deletedItem;
    }
}

const myNewArray = new MyArray();

myNewArray.push("One");
myNewArray.push("Two");
myNewArray.push("Three");

console.log(myNewArray);
console.log(myNewArray.deleteByIndex(2));
console.log(myNewArray);
