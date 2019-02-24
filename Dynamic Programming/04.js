/*
 * Given a set of non-negative distinct integers, and a value m, determine if 
 * there is a subset of the given set with sum divisible by m.
 */ 

 // Using DP - tabulation
 // As this is a NP-Complete problem there is no polynomial time complexity in which it can be solved. 
 // The time complexity is O(2^n) as it is a GP (1,2,4,8,16,32..) r=2 (a*r*(n-1)/r-1)

var givenArray = [5,3,10,1,5,0];
var m = 6;
var cacheObj = {};

function findingSubsetsDivisibleByM(startIndex, endIndex){
    if(typeof startIndex != "undefined" && startIndex==endIndex){
        if(!cacheObj[startIndex]){
            cacheObj[startIndex] = givenArray[startIndex];
            isDivisbleByM(givenArray[startIndex], startIndex);
        }
        return;
    }
    if(startIndex != endIndex){
        for(var key in cacheObj){
            if(cacheObj.hasOwnProperty(key)){
                if(key != endIndex && key.indexOf(endIndex) == -1){
                    var newKey = key.toString()+endIndex;
                    if(!cacheObj[newKey]){
                        cacheObj[newKey] = cacheObj[key]+givenArray[endIndex];
                        isDivisbleByM(cacheObj[newKey], newKey);
                    }
                }
            }
        }
        return;
    }
    
    

    for(var i=0;i<givenArray.length;i++){
        for(var j=0;j<=i ;j++){
            findingSubsetsDivisibleByM(j,i);
        }
    }
}

function isDivisbleByM(args, index){
    if(args%m ==0){
        console.log("Sum is divisible by "+m+" at index "+index);
    }
}

findingSubsetsDivisibleByM();
