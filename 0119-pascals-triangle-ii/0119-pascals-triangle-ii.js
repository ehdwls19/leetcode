/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//needs to be re-solved with different ideas.
var getRow = function(rowIndex) {    
    let res = [1];
    let prev = 1;
    for(let i = 1; i <= rowIndex; i++) {
        let next_val = prev * (rowIndex - i + 1) / i;
        res.push(next_val);
        prev = next_val;
    }
    return res;
};