class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return newNode;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        let temp = this.head;
        let prev = this.head;
        while (temp.next !== null) {
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return newNode;
    }

    shift() {
        if (!this.head) {
            return undefinded;
        }
        let shiftedNode = this.head;
        this.head = this.head.next;
        shiftedNode.next = null;
        this.length--;
        return shiftedNode;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        return temp;
    }
    get(index) {
        if (!this.head) {
            return null;
        }
        let temp = this.head;
        while (temp) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
            return temp;
        }
        return null;
    }
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index === 0) {
            return this.unshift(value);
        } else if (index === this.length - 1) {
            return this.push(value);
        } else if (0 < index || index < this.length) {
            let newNode = new Node(value);
            let temp = this.get(index - 1);
            newNode.next = temp.next;
            temp.next = newNode;
            this.length++;
            return true;
        }
        return false;
    }
    size() {
        let temp = this.head;
        let counter = 0;
        while (temp) {
            counter++;
            temp = temp.next;
        }
        return counter;
    }
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
    }
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }
}

const myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
console.log(myLinkedList.reverse());
// console.log(myLinkedList.reverse());
