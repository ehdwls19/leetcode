/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //declare limit for minPrice
    let minPrice = 10**4;
    //declare maxProfit as 0
    let maxProfit = 0;
    //iterate prices and calculate maxProfit
    for(let price of prices){
        minPrice = minPrice>price? price:minPrice;
        maxProfit = price-minPrice>maxProfit?price-minPrice:maxProfit;
    }
    
    return maxProfit;
    
};