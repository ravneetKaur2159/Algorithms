// Fibonacci series using recursion
function findFibonacciSeries(num){
    if(num==0){
        return 0;
    }

    if(num==1){
        return 1;
    }
    return findFibonacciSeries(num-1)+findFibonacciSeries(num-2);
}
console.log(findFibonacciSeries(6));

// Fibonacci using DP Memoization - top down approach
var cacheFibSeriesMem = [0,1];
function findFibonacciSeriesDPMem(num){
    if(num==0 || num==1){
        return num;
    }
    if(num<0){
        return 0;
    }
    if(cacheFibSeriesMem[num]){
        return cacheFibSeriesMem[num];
    }
    var recursiveArg = findFibonacciSeriesDPMem(num-1)+findFibonacciSeriesDPMem(num-2)
    cacheFibSeriesMem.push(recursiveArg);
    return(recursiveArg);
}

console.log(findFibonacciSeriesDPMem(6));


//Fibonacci using DP tabulation - bottom up approach
var cacheFibSeries = [];
function findFibonacciSeriesDP(num){
    if(num==0 || num==1){
        return num;
    }
    if(num<0){
        return 0;
    }

    if(cacheFibSeries[num]){
        return cacheFibSeries[num];
    }

    for(var i=0 ; i<=num ; i++){
        cacheFibSeries.push(findFibonacciSeriesDP(i-1)+findFibonacciSeriesDP(i-2));
    }
    return cacheFibSeries[num];
}
console.log(findFibonacciSeriesDP(6))