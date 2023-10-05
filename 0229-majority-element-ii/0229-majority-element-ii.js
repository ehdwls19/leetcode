/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    //define target Duplicated times;
    const targetTimes = (Number(nums.length)/3);
    const countMap = new Map();
    const uniqueNums = new Set();
    for(let num of nums){
        countMap[num] = countMap[num]+1 || 1;
        if(countMap[num]>targetTimes){
            uniqueNums.add(num)
        }
    }
    return Array.from(uniqueNums)
};