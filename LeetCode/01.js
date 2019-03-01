// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var givenArray = [2,7,1,8,4,4,4];
var sum = 12;

// Brute Force - O(n^2)
function sumTwoNumbers(){
    for(var i=0;i<givenArray.length; i++){
        for(var j=1;j<givenArray.length;j++){
            if(i==j){
                break;
            }
            var value = givenArray[i]+givenArray[j];
            if(sum == value){
                console.log("The two indices are : "+i+" and "+j);
                return;
            }
        }
    }
    console.log("There are no two indices that add up to the given sum");
}
//sumTwoNumbers();


// Sort array in new array and find indices in 1 loop - O(nLogn + n) --> O(nLogn)
// Bubble sort
var newArray = givenArray;

function recursiveSort(startIndex, endIndex){
    if(typeof startIndex != "undefined" && startIndex == endIndex){
        return startIndex;
    }

    if(startIndex != endIndex){
        var middleLen = Math.floor((startIndex+endIndex)/2);
        var firstElementIndex = recursiveSort(startIndex,middleLen);
        var secondElementIndex = recursiveSort(middleLen+1, endIndex);
        return newArray[firstElementIndex] >= newArray[secondElementIndex] ? firstElementIndex : secondElementIndex;
    }

    for(var i=0;i<newArray.length;i++){
        var maxElementIndex = recursiveSort(0,newArray.length-(1+i));
        var temp = newArray[newArray.length-(1+i)];
        newArray[newArray.length-(1+i)] = newArray[maxElementIndex];
        newArray[maxElementIndex] = temp;
    }
}

//recursiveSort();
//maxElementSortedArray();
//Finding Max element given array is sorted - O(n)
function maxElementSortedArray() {
    for(var i=0,j = newArray.length-1;i<j;){
        if(newArray[i]+newArray[j] < sum){
            i++;
        }else if(newArray[i]+newArray[j] > sum){
            j--;
        }else{
            console.log("The two indices are : "+i+" and "+j);
            return;
        }
    }
    console.log("There are no two indices that add up to the given sum");
}


// Finding indices by hashing - O(n)
function getIndicesByHashing(){
    var cacheValues = {};
    for(var i=0;i<givenArray.length; i++){
        var requiredElem = sum-givenArray[i];
        if(typeof cacheValues[requiredElem] != "undefined"){
            console.log("The two indices are : "+cacheValues[requiredElem]+" and "+i);
            return;
        }
        cacheValues[givenArray[i]] = i;
    }
    console.log("There are no two indices that add up to the given sum");
}
//getIndicesByHashing();

// Algorithm that returns the fixed subset of indices that sum to the given number by using hashing
function getRequiredIndicesByHashing(reqSubset,presentIndex){
    for(var i=0;i<givenArray.length;i++){
        if(getIndicesOfGivenLength(i,0)){
            console.log(i);
            return;
        }
    }
    console.log("There are no "+reqSubset+" indices that add up to the given sum");
}

// each call has O(n) time
function getIndicesOfGivenLength(removeIndex, startIndex, endIndex){
    var cacheValues = {};
    requiredSum = sum - givenArray[removeIndex];
    for(var i=startIndex; i<givenArray.length;i++){
        if(i == removeIndex){
            continue;
        }
        var requiredElem = requiredSum-givenArray[i];
        if(typeof cacheValues[requiredElem] != "undefined"){
            console.log("The indices are : "+cacheValues[requiredElem]+" and "+i);
            return true;
        }
        cacheValues[givenArray[i]] = i;
    }
    return false;
}

// Time complexity = O(n^2)
getRequiredIndicesByHashing(3)