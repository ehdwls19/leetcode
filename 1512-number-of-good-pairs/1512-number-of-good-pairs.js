/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    //count same numbers
    var countsSameNumberObj = {};
    
    for (var i = 0; i < nums.length; i++)  {
        countsSameNumberObj[nums[i]] = (countsSameNumberObj[nums[i]] + 1) || 1;
    }
    //convert Object to Array
    const countsSameNumberList = Object.values(countsSameNumberObj);
    console.log(countsSameNumberList)
    
    let numberOfGoodPairs = 0;
    for(const countsSameNumber of countsSameNumberList){
        if(countsSameNumber<2){
            continue;
        }
        var count = 0;
        let sum = 0;
        while(count < countsSameNumber-1){
            sum += countsSameNumber-1-count
            count++
        }    
        numberOfGoodPairs+=sum;
    }
    return numberOfGoodPairs;
    
    //calculate number of Good Pairs by count of same number
    //2 - 1 pairs= 1 
    //3 - 3 pairs= 2 + 1
    //4 - 6 pairs= 3 + 2 + 1
    //5 - 10 pairs= 4 + 3 + 2 + 1 
    //6 - 15 pairs= 5 + 4 + 3 + 2 + 1
    //7 - 21 pairs
    
};