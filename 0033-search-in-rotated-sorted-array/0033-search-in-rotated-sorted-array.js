/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length -1;
    index = 0;
    
    while(l<=r){
        let m = ~~((l+r)/2)

        if (nums[m] === target) {
          return m;
        }

        // When dividing the roated array into two halves, one must be sorted.
        // Check if the left side is sorted
        if (nums[l] <= nums[m]) {
          if (nums[l] <= target && target <= nums[m]) {
            // target is in the left
            r = m - 1;

          } else {
            // target is in the right
            l = m + 1;
          }
        } 

        // Otherwise, the right side is sorted
        else {
          if (nums[m] <= target && target <= nums[r]) {
            // target is in the right
            l = m + 1;

          } else {
            // target is in the left
            r = m - 1;
          }
        }
    }
    
    return -1;
    
};