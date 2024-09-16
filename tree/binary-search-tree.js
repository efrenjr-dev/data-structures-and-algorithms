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
    breadthFirstSearch() {
        let current = this.root;
        let queue = [];
        let data = [];

        queue.push(current);

        while (queue.length) {
            current = queue.shift();
            data.push(current.value);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return data;
    }
    depthFirstSearchPreOrder(node = this.root, data = []) {
        if (node === null) return data;
        data.push(node.value);

        if (node.left) this.depthFirstSearchPreOrder(node.left, data);
        if (node.right) this.depthFirstSearchPreOrder(node.right, data);
        return data;
    }
    depthFirstSearchPostOrder(node = this.root, data = []) {
        if (node === null) return data;

        if (node.left) this.depthFirstSearchPostOrder(node.left, data);
        if (node.right) this.depthFirstSearchPostOrder(node.right, data);

        data.push(node.value);

        return data;
    }
    depthFirstSearchInOrder(node = this.root, data = []) {
        if (node === null) return data;

        if (node.left) this.depthFirstSearchInOrder(node.left, data);
        data.push(node.value);
        if (node.right) this.depthFirstSearchInOrder(node.right, data);

        return data;
    }
}

const tree = new BST();
tree.insert(5);
tree.insert(1);
tree.insert(2);
tree.insert(9);
tree.insert(7);
console.log(tree);
const result1 = tree.depthFirstSearchPreOrder();
const result2 = tree.depthFirstSearchPostOrder();
const result3 = tree.depthFirstSearchInOrder();
console.log("DFS PreOrder", result1);
console.log("DFS PostOrder", result2);
console.log("DFS InOrder", result3);
