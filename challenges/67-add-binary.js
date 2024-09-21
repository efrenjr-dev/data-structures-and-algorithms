var addBinary = function (a, b) {
    let carry = 0;
    let sum = 0;
    let result = "";
    while (a || b || carry) {
        sum = (a % 2) + (b % 2) + carry;
        result = (sum % 2).toString() + result;
        carry = Math.floor(sum / 2);
        a = Math.floor(a / 10);
        b = Math.floor(b / 10);
    }

    return result;
};

const c = ["1111111"];
const d = ["100011100101111"];
console.log(addBinary(c, d));
