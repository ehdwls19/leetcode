/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    //needs to be re-solved with different idea.
    let lengthOfNums1 = nums1.length;
    let lengthOfNums2 = nums2.length;
    
    let current = new Array(lengthOfNums2 + 1).fill(Number.MIN_SAFE_INTEGER);
    let previous = new Array(lengthOfNums2 + 1).fill(Number.MIN_SAFE_INTEGER);

    for (let i = 1; i <= lengthOfNums1; i++) {
        for (let j = 1; j <= lengthOfNums2; j++) {
            let curr_product = nums1[i - 1] * nums2[j - 1];
            current[j] = Math.max(curr_product, previous[j], current[j - 1], curr_product + Math.max(0, previous[j - 1]));
        }
        
        [current, previous] = [previous, current];
    }
    return previous[lengthOfNums2];
};