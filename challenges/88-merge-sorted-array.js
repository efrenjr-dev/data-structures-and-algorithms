var merge = function (nums1, m, nums2, n) {
    if (n === 0) {
        /*nums1 is unchanged*/
    } else if (m === 0) {
        nums1 = nums2;
    } else {
        let mergedArray = [];
        while (m !== 0 || n !== 0) {
            if (nums1[0] <= nums2[0] && m !== 0) {
                mergedArray.push(nums1.shift());
                m--;
            } else if (nums1[0] >= nums2[0] || n !== 0) {
                mergedArray.push(nums2.shift());
                n--;
            }
        }
        mergedArray.push(...nums1);
        nums1 = mergedArray;
    }
    console.log(nums1);
};

let arr1 = [0];
let a = 0;
let arr2 = [1];
let b = 1;
merge(arr1, a, arr2, b);
