/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = nums[1]? nums[1] : 0;
    for(let i = 2; i<nums.length; i++){
        for(let j = 0; j<i-1; j++){
            dp[i] = Math.max(dp[i],nums[i]+dp[j]);
        }
    }
    return Math.max(...dp)
    
};