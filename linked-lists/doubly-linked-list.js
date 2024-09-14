class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        const temp = this.tail;
        if (this.length === 0) {
            return undefined;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null; // not necessary to manually delete unlinked nodes as JS has a built-in garbage collector
        }
        this.length--;
        return temp;
    }
    unshift(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            return newNode;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        let temp = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        temp.next = null;
        this.length--;
        return temp;
    }
}

const myDoublyLinkedList = new DoublyLinkedList();

myDoublyLinkedList.push(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.unshift(99);
myDoublyLinkedList.shift();
// myDoublyLinkedList.pop();
console.log(myDoublyLinkedList);
