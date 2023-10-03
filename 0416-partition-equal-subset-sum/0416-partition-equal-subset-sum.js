var canPartition = function(nums) {
	//calculate the totalSum of nums
    let totalSum = nums.reduce((acc, curr) => acc + curr);
    //It can't be odd because it is Integer.
    if (totalSum % 2) return false;

    const target = totalSum / 2;
    const memo = new Set([0]);

    for (let number of nums) {
        let possibleSums = Array.from(memo);
        for (let possibleSum of possibleSums) {
        //Iterate all the elements of nums Array and add possibleSum into memo
            memo.add(possibleSum + number);
        }
    }
    //If any of elements of memo has a same number of target, 
    //It is possible to divide into two subsets.
    return memo.has(target);
 }