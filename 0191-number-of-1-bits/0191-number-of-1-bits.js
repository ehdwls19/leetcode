/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        const bitComparison = n & 1; // 1 & 1 will return 1. 0 & 1 will return 0.
        if (bitComparison === 1) {
            count++;
        }
        n >>>= 1; // unsigned right shift assignment (chop off the last bit and assign it)
    }  
    return count;
};