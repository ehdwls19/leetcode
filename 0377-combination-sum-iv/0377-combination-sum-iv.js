/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//needs to be resolved with different idea.
const combinationSum4 = (nums, target) => {
    const dp = Array(target + 1).fill(0)
    dp[0] = 1
    for (let currTarget = 1; currTarget <= target; currTarget++) {
        nums.forEach(num => {
            const difference = currTarget - num;
            if (difference >= 0) {
                dp[currTarget] += dp[difference];  
            }
        })
    }
    
    return dp[target]
};