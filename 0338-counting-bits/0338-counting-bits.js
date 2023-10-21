/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let count = 0;
    let answers = [];
    while(count <= n){
        answers.push(count.toString(2).replaceAll("0", "").length);
        count++;
    }
    
    return answers;
};
