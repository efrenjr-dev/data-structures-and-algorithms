class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size);
    }

    _hashFunction(key) {
        let sum = 0;

        const PRIME_NUMBER = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(0) - 96;
            sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
        }
        return sum;
    }

    set(key, value) {
        const index = this._hashFunction(key);
        // console.log(index);
        // console.log(!this.keyMap[index]);
        if (!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
        return this;
    }
    get(key) {
        const index = this._hashFunction(key);
        if (!this.keyMap[index]) {
            return undefined;
        }
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (key === this.keyMap[index][i][0]) {
                return this.keyMap[index][i][1];
            }
        }
        return undefined;
    }
    getAllKeys() {
        const keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (this.keyMap[i][j][0]) keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    }
    getAllValues() {
        const values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (this.keyMap[i][j][1]) values.push(this.keyMap[i][j][1]);
                }
            }
        }
        return values;
    }
}

const phoneBook = new HashTable();
console.log(phoneBook.set("james", "111-222-333"));
console.log(phoneBook.set("albert", "444-555-666"));
console.log(phoneBook.set("sarah", "777-888-999"));
console.log(phoneBook.set("gilbert", "000-111-222"));
// console.log(phoneBook.get("james"));
console.log(phoneBook.getAllKeys());
console.log(phoneBook.getAllValues());
