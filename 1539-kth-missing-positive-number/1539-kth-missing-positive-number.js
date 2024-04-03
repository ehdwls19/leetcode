/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

//brute force
// var findKthPositive = function(arr, k) {
//     const maxLengthOfK = 1000;
//     let count = 0;
//     for(let i = 1; i<maxLengthOfK; i++){
//         if(arr[i] !== i){
//             count++;
//             if(count === k){
//                 return count;
//             }
//         }
//     }
// };

// var findKthPositive = function(arr, k) {
//     let count = 0;
//     for (item of arr) {
//         if (item <= k + count) {
//           count++;
//         }
//     }
//     return k + count;
// };

// var findKthPositive = function(arr, k){
//     return Array.from(Array(2001).keys()).filter(key => !arr.includes(key))[k];
// }

var findKthPositive = function(arr, k){
    let i = 0;
    let currentNumber = 1;
    let missingNumbersOfCount = 0;
    
    while(missingNumbersOfCount<k){
        if(arr[i] === currentNumber){
            i++; //1 , 2, 3, 4
            currentNumber++; //3, 4, 5, 8
        }else{
            currentNumber++; //2, 6, 7, 9, 10
            missingNumbersOfCount++ //1, 2, 3, 4, 5
        }
    }
    return currentNumber -1;
}