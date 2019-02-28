// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var givenArray = [2,7,1,8];
var sum = 8;

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

recursiveSort();
maxElementSortedArray();
//Finding Max element given array is sorted
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