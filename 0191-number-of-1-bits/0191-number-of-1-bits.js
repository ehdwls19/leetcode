/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const str = n.toString(2); // pass a radix parameter of 2 to keep it in base 2.
    let count = 0;
    for (let char of str) {
        if (char === "1") count++;
    }
    return count;  
};