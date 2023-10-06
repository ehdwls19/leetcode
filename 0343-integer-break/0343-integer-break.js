/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    //set Divider as 3 which has the maximum value to multiply.
    const DIVIDER = 3;
    const QUOTIENT_BY_DIVIDER = Math.floor(n/DIVIDER);
    const REMAINDER_BY_DIVIDER =  n%DIVIDER;
    //create and declare timesOfPower and multiplyValue
    let timesOfPower = 1;
    let multiplyValue = 1;
    
    //make a case for exception
    if(QUOTIENT_BY_DIVIDER === 0){
        return 1;
    }else if(QUOTIENT_BY_DIVIDER === 1){
        if(REMAINDER_BY_DIVIDER === 0){
            return 2;
        }
    }
    
    //switch case for remainder by DIVIDER
    //and set timesOfPower and multiplyValue in cases.
    switch(REMAINDER_BY_DIVIDER){
        case 0:
            timesOfPower = QUOTIENT_BY_DIVIDER;
            break;
        case 1:
            timesOfPower = QUOTIENT_BY_DIVIDER-1;
            multiplyValue = 4;
            break;
        case 2:
            timesOfPower = QUOTIENT_BY_DIVIDER;
            multiplyValue = 2;
            break;
        default:
            timesOfPower = QUOTIENT_BY_DIVIDER;
    }
    return (DIVIDER ** timesOfPower)*multiplyValue;
    
};