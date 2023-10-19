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
        let smallerSide = Math.min(height[left],height[right])
        let curValue = (right - left) * smallerSide;
        if(curValue > maxValue){
            maxValue = curValue;
        }
        if(height[left]<height[right]){
            left++
        }else{
            right--;
        }
    }
    
    return maxValue;
};