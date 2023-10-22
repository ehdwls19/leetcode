/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    return nums.reduce((a, c, i) => a + i + 1 - c, 0)
};