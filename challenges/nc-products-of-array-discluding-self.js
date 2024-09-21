const productExceptSelf = (nums) => {
    let output = [];
    let prefix = 1;
    let postfix = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] = prefix;
        prefix *= nums[i];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        output[i] *= postfix;
    }
    return output;
};

const input = [1, 2, 4, 6];
const result = productExceptSelf(input);
console.log(result);
