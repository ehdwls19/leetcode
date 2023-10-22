/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arr = new Array(nums.length+1).fill(0);
    
    for(let i = 0; i<nums.length; i++){
        arr[nums[i]]++;
    }
    return arr.findIndex((e) => e === 0);
};