/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    //define conditions for Alice to win
    const aliceWinCondition = "AAA";
    //define conditions for Bob to win
    const bobWinCondition = "BBB";
    if(!colors.includes(aliceWinCondition)){
        return false;
    }else if(!colors.includes(bobWinCondition)){
        return true;
    }
    var numberOfAliceWinCases = 0;
    var numberOfBobWinCases = 0;
    var indexOfAliceWinCase = 0;
    var previousAliceWinIndex = 0;
    var indexOfBobWinCase = 0;
    var previousBobWinIndex = 0;
    var count = 0;
    //count number Of Alice Win Cases and number of Bob Win Cases and comapre.
    while(true){
        previousAliceWinIndex = colors.indexOf(aliceWinCondition, indexOfAliceWinCase);
        previousBobWinIndex = colors.indexOf(bobWinCondition, indexOfBobWinCase);
        if(previousAliceWinIndex>-1){
            numberOfAliceWinCases++;
            indexOfAliceWinCase = previousAliceWinIndex+1;
        }else if(previousBobWinIndex>-1){
            numberOfBobWinCases++;
            indexOfBobWinCase = previousBobWinIndex+1;
        };
        if(previousAliceWinIndex<0&&previousBobWinIndex<0){
            break;
        };
    }
    //if bob has bigger cases of win than Alice loses.
    if(numberOfBobWinCases>=numberOfAliceWinCases){
        return false;
    }else{
        return true;
    }
    
};