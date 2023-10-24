/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    for(let i = nums.length -1; i>=0; i--){
        for(j = i+1; j<nums.length; j++){
            if(nums[i]<nums[j]){
                dp[i] = Math.max(dp[j]+1,dp[i]); 
            }
        }
    }
    return Math.max(...dp)
    
};