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
        let curValue = 0;
        if(height[left]<height[right]){
            curValue = height[left]*(right-left);
            if(maxValue<curValue){
                maxValue = curValue
            }
            left++;
        }else{
            curValue = height[right]*(right-left);
            if(maxValue<curValue){
                maxValue = height[right]*(right-left)
            }
            right--;
        }
    }
    return maxValue;
};