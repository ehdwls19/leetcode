/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const str = n.toString(2)
    return str === '0' ? 0 : (str.match(/1/g)).length; 
};