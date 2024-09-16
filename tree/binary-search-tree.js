class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        let temp = this.root;
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        while (true) {
            if (newNode.value === temp.value) {
                return undefined;
            }
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
    includes(value) {
        if (!this.root) {
            return false;
        }

        let temp = this.root;

        while (temp) {
            if (temp.value === value) {
                return true;
            } else if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            }
        }
        return false;
    }
}

const tree = new BST();
tree.insert(5);
tree.insert(1);
tree.insert(2);
tree.insert(9);
tree.insert(7);
console.log(tree);
const result = tree.includes(9);
console.log(result);
