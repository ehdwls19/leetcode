/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let count = 0;
    let answers = [];
    while(count <= n){
        let binaryVal = (count >>> 0).toString(2);
        let answer = binaryVal === '0' ? 0 : (binaryVal.match(/1/g)).length; 
        answers.push(answer)
        count++;
    }
    
    return answers;
};
