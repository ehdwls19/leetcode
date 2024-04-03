/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//brute force way
// var search = function(nums, target) {
//     if(!nums.length){
//         return -1;
//     }
//    for(let i = 0; i<nums.length; i++){
//        if(nums[i]===target){
//            return i;
//        }
//    } 
//     return -1;
// }

//binary search
var search = function(nums, target){
    let start = 0;
    let end = nums.length-1;
    
    while (start<=end){
        let middle = Math.floor((start+end)/2);
        if(nums[middle] === target){
            return middle;
        }
        if(nums[middle] < target){
            start = middle +1;
        } else{
            end = middle - 1;
        }    
    }
    return -1;
}