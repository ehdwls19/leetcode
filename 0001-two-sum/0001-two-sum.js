/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //set Target Int for a num[i]
    let targetInt = 0;
    for(let i =0; i<nums.length; i++){
        targetInt = target-nums[i];
        for(let j =i+1;j<nums.length;j++){
            if(targetInt==nums[j]){
                return [i,j];
            }
        }
    }
};