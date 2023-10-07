/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function(n, m, k) {
    //needs to be re-solved again.
    if(m<k || k==0){
        return 0;
    }
        
   const MOD = 1000000007;

    let dp = new Array(n + 1).fill(null).map(() => {
        return new Array(m + 1).fill(null).map(() => {
            return new Array(k + 1).fill(0);
        });
    });

    let prefix = new Array(n + 1).fill(null).map(() => {
        return new Array(m + 1).fill(null).map(() => {
            return new Array(k + 1).fill(0);
        });
    });

    for (let j = 1; j <= m; j++) {
        dp[1][j][1] = 1;
        prefix[1][j][1] = j;
    }

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            for (let l = 1; l <= k; l++) {
                dp[i][j][l] = (j * dp[i - 1][j][l]) % MOD;

                if (j > 1 && l > 1) {
                    dp[i][j][l] = (dp[i][j][l] + prefix[i - 1][j - 1][l - 1]) % MOD;
                }

                prefix[i][j][l] = (prefix[i][j - 1][l] + dp[i][j][l]) % MOD;
            }
        }
    }

    return prefix[n][m][k];
};    
    //find patterns between m and n
    
        //n=2, m=1 => 1^2 = 1
    //[1,1]
    //n=3, m=1 => 1^2 = 1
    //[1,1,1]
    //n=2, m=2 => 2^2 = 4
    //[1,1][1,2][2,1][2,2]
    //n=3, m=2 => 2^3 = 8
    //[1,1,1][1,1,2][1,2,1][1,2,2][2,1,1][2,1,2][2,2,1][2,2,2]
    
    //n=2, m=2 => 2^2 = 4
    //[1,1][1,2][2,1][2,2]
    //k=1 // 3
    //[1,1][2,1][2,2]
    //k=2 // 1
    //[1,2]
    
    //n=2, m=3 => 3^2 = 9
    //[1,1][1,2][1,3][2,1][2,2][2,3][3,1][3,2][3,3]
    //k=1 // 6
    //[1,1][2,1][2,2][3,1][3,2][3,3]
    //k=2 // 3
    //[1,2][1,3][2,3]  
    
    //n=3, m=2 => 2^3 = 8
    //[1,1,1][1,1,2][1,2,1][1,2,2][2,1,1][2,1,2][2,2,1][2,2,2]
    //k=1 // 5
    //[1,1,1],[2,1,1][2,1,2][2,2,1][2,2,2]
    //k=2 // 3
    //[1,1,2][1,2,1][1,2,2]
    //k=3
    
    //n=2, m=4 => 4^2 = 16
    //[1,1][1,2][1,3][1,4][2,1][2,2][2,3][2,4][3,1][3,2][3,3][3,4][4,1][4,2][4,3][4,4]
    //k=1 // 10
    //[1,1][2,1][2,2][3,1][3,2][3,3][4,1][4,2][4,3][4,4]
    //k=2 // 6
    //[1,2][1,3][1,4][2,3][2,4][3,4]