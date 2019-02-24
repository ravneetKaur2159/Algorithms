/*
 * Given a set of non-negative distinct integers, and a value m, determine if 
 * there is a subset of the given set with sum divisible by m.
 */ 

 // Using DP - tabulation
 // As this is a NP-Complete problem there is no polynomial time complexity in which it can be solved. 
 // The time complexity is O(2^n) as it is a GP (1,2,4,8,16,32..) r=2 (a*r*(n-1)/r-1)

var givenArray = [0,1,2,3,4,5,6];
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
//findingSubsetsDivisibleByM();


// Solving it in pseudo-polynomial time O(n*sum) - works on sorted Array
// THere is a subset present in the array that equals to sum
var cacheArr = [];
var sum =6;

function findSubsets(){
    for(var i=0;i<givenArray.length;i++){
        cacheArr[i] = [];
        for(var j=0;j<=sum;j++){
            if(j == 0){
                cacheArr[i][j] = 1;
            }else if(i == 0 && j!=0){
                cacheArr[i][j] = 0;
            }else{
                cacheArr[i][j] = cacheArr[i-1][j] || cacheArr[i-1][j-givenArray[i]];
            }
            
        }
    }
}

findSubsets()

// Printing if subsets exists
function isSubsetPresent(){
    var j=cacheArr.length-1;
    for(var i=givenArray.length-1;i>=0;i--){
        if(cacheArr[i][j]){
            console.log("Subset exists");
            return;
        }
    }
}
isSubsetPresent();


// Printing all subsets of givenArray who sum to given sum
function printSubsets(row, column){
    if(row<0 || column<0){
        return;
    }

    if(typeof row != "undefined" && typeof column != "undefined" && cacheArr[row][column]){
        for(var k=row;k>=0;k--){
            if(!cacheArr[k][column]){
                break;
            }
        }
        console.log(givenArray[k+1]);
        printSubsets(row-1,column-givenArray[row]);
        return;
    }

    for(var i=givenArray.length-1;i>=0;i--){
        for(j=sum;;){
            if(cacheArr[i][j]){
                console.log("Subset is : ");
                console.log(givenArray[i]);
                printSubsets(i-1,j-givenArray[i]);
                break;
            }
        }
    }
}
//printSubsets();


//Printing all subsets that give sum within a range
var lowRange = 3;
var highRange = 6;
function printSubsetsOfRange(row, column){
    if(row<0 || column<0){
        return;
    }

    if(typeof row != "undefined" && typeof column != "undefined" && cacheArr[row][column]){
        for(var k=row;k>=0;k--){
            if(!cacheArr[k][column]){
                break;
            }
        }
        console.log(givenArray[k+1]);
        printSubsets(row-1,column-givenArray[row]);
        return;
    }
    var j=highRange;
    var i=givenArray.length-1;
    for(;;i--){
        for(;j>=lowRange;){
            if(cacheArr[i][j] && givenArray[i]<=j){
                console.log("Printing all subsets that sum to : "+ j);
                console.log("Subset is : ");
                console.log(givenArray[i]);
                printSubsets(i-1,j-givenArray[i]);
            }
            break;
        }
        if(i==0){
            j=j-1;
            i=givenArray.length-1;
        }
    }
}

//printSubsetsOfRange();

/* 
 * Variation can be print maximum size subset that sums to the given sum. Solving this using tabulation approach
 */

var givenSum = 6;
var maximumSubset = {};
function printMaximumSubset(endIndex, startIndex){
    if(typeof startIndex != "undefined" && endIndex==startIndex && givenArray[startIndex]<=givenSum){
        maximumSubset[startIndex] = givenArray[startIndex];
        return;
    }
    if(endIndex!=startIndex){
        for(var key in maximumSubset){
            if(maximumSubset.hasOwnProperty(key)){
                var newKey = key.toString()+endIndex;
                var value = maximumSubset[key]+givenArray[endIndex];
                if(value<=givenSum){
                    maximumSubset[newKey] = value;
                }
            }
        }
        return;
    }

    for(var i=0;i<givenArray.length;i++){
        for(var j=0;j<=i;j++){
            printMaximumSubset(i,j);
        }
    }
}

printMaximumSubset();

//Sorting object by keys
for(var key in maximumSubset){
    if(maximumSubset.hasOwnProperty(key)){
        if(maximumSubset[key]<givenSum){
            delete maximumSubset[key];
        }
    }
}
//Then print the maximum subset
console.log(maximumSubset);