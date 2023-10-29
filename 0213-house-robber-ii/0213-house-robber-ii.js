/**
 * @param {number[]} nums
 * @return {number}
 */
//needs to be re-solved with dp.
var rob = function(nums) {
    if (nums.length == 1) return nums[0]
    let prev1 = 0, cur1 = 0
    let prev2 = 0, cur2 = 0
    for (let i = 1; i < nums.length; i++) {
        const n1 = nums[i-1]
        const n2 = nums[i]
        cur1 = Math.max(n1 + prev1, prev1 = cur1)
        cur2 = Math.max(n2 + prev2, prev2 = cur2)
    }
    return Math.max(cur1, cur2)
};