/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let totalValue = 1;
    let answer = [];
    let hasZero = false;
    let isMorethanTwoZero = false;
    let zeroCount = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i]!==0){
            totalValue *= nums[i];
        } else{
            zeroCount++
            hasZero = true;
        }
    }

    if(zeroCount >= 2){
        isMorethanTwoZero = true;
    }
    
    for(let i = 0; i<nums.length; i++){
        if(isMorethanTwoZero){
            answer.push(0)
        }else if(nums[i]==0){
            answer.push(totalValue)
        }else if(hasZero){
            answer.push(0)
        }else{
            answer.push(+(totalValue/nums[i]).toFixed(0))
        }
    }
    
    return answer
};