/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //using two pointers algorithm which is O(n) to calculate maxValue.
    let left = 0;
    let right = height.length - 1;
    let maxValue = 0;
    while(left<right){
        if(height[left]<height[right]){
            if(maxValue<height[left]*(right-left)){
                maxValue = height[left]*(right-left);
            }
            left++;
        }else{
            if(maxValue<height[right]*(right-left)){
                maxValue = height[right]*(right-left);
            }
            right--;
        }
    }
    return maxValue;
};