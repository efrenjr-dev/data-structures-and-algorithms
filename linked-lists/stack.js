class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp;
    }
    min() {
        if (this.length === 0) {
            return undefined;
        }
        let current = this.first;
        let minValue = current.value;

        while (current.next) {
            current = current.next;
            minValue = Math.min(minValue, current.value);
        }
        return minValue;
    }
}

// let myStack = new Stack();
// myStack.push(0);
// myStack.push(1);
// myStack.push(2);

// console.log(myStack.min());

module.exports = Stack;
