const twoSum = (nums, target) => {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (target === nums[i] + nums[j]) {
    //             return [i, j];
    //         }
    //     }
    // }
    // return "No two numbers have the target as sum";

    let map = {};
    let addend = null;
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] != null) {
            return [map[nums[i]], i];
        }
        addend = target - nums[i];
        map[addend] = i;
    }
};

const res = twoSum([2, 7, 11, 15], 9);
console.log(res);
// const res2 = twoSum([2, 7, 11, 15], 10);
// console.log(res2);
