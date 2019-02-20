// Finding factorial through D and C O(n)
function findFactorial(num){
    if(num==1){
        return 1;
    }
    return(num*findFactorial(num-1));
}
console.log(findFactorial(8));

// Finding factorial through DP - tabulation
var cacheFactorialNum = [1];

function findFactorialDP(num){
    if(cacheFactorialNum[num]){
        return cacheFactorialNum[num];
    }
    for(var i=1 ; i<=num ; i++){
        cacheFactorialNum.push(i*findFactorialDP(i-1));
    }
    return cacheFactorialNum[num];
}

console.log(findFactorialDP(8));

