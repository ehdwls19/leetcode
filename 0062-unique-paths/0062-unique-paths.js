/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//needs to be re-solved with dp idea.
var uniquePaths = function(m, n) {
    let ans = 1;
    for (let i = 1; i <= m - 1; i++) {
        ans = ans * (n - 1 + i) / i;
    }
    return ans;
};